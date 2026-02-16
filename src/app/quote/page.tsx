import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get a Free Quote | Personal and Commercial Insurance | FHIA',
  description: 'Get your free insurance quote today. Personal auto, commercial auto, home, business, and more.',
};

const insuranceTypes = [
  'Personal Auto Insurance',
  'Commercial Auto & Fleet Insurance',
  'Homeowners & Renters Insurance',
  'Business & Liability Insurance',
  'Captive Insurance',
  'Customized Plans',
];

export default function QuotePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-16">
        <div className="container-custom text-center">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your Free Insurance Quote
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Fill out the form below and one of our agents will reach out with personalized coverage options. No obligation, no pressure.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h2 className="font-poppins text-2xl font-bold text-navy mb-6">
                  Tell Us About Your Insurance Needs
                </h2>
                <form className="space-y-6">
                  {/* Insurance Type */}
                  <div>
                    <label htmlFor="insuranceType" className="block text-sm font-medium text-gray-700 mb-1">
                      Type of Insurance *
                    </label>
                    <select
                      id="insuranceType"
                      name="insuranceType"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                    >
                      <option value="">Select insurance type...</option>
                      <option value="personal-auto">Personal Auto Insurance</option>
                      <option value="commercial-auto">Commercial Auto / Fleet Insurance</option>
                      <option value="home">Homeowners Insurance</option>
                      <option value="renters">Renters Insurance</option>
                      <option value="business">Business Insurance</option>
                      <option value="captive">Captive Insurance</option>
                      <option value="other">Other / Multiple</option>
                    </select>
                  </div>

                  {/* Personal Info */}
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

                  <div className="grid md:grid-cols-2 gap-4">
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
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Street address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <select
                        id="state"
                        name="state"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                      >
                        <option value="">Select...</option>
                        <option value="NY">New York</option>
                        <option value="NJ">New Jersey</option>
                        <option value="CT">Connecticut</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="FL">Florida</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div>
                    <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Details
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      placeholder="Tell us about your specific needs, current coverage, or any questions..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Preferred Contact */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="contactMethod" value="phone" className="text-gold focus:ring-gold" defaultChecked />
                        <span className="text-gray-700">Phone</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="contactMethod" value="email" className="text-gold focus:ring-gold" />
                        <span className="text-gray-700">Email</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="contactMethod" value="either" className="text-gold focus:ring-gold" />
                        <span className="text-gray-700">Either</span>
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="btn-primary w-full text-lg py-4">
                    Get My Free Quote
                  </button>

                  <p className="text-center text-gray-500 text-sm">
                    By submitting this form, you agree to be contacted by a licensed agent.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-navy rounded-xl p-8 text-white mb-8">
                <h3 className="font-poppins font-semibold text-xl mb-4">
                  What We Offer
                </h3>
                <ul className="space-y-3">
                  {insuranceTypes.map((type) => (
                    <li key={type} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{type}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gold/10 rounded-xl p-8">
                <h3 className="font-poppins font-semibold text-xl text-navy mb-4">
                  Why Choose FHIA?
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-lg">✓</span>
                    <span>20+ years serving Long Island</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-lg">✓</span>
                    <span>Compare multiple carriers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-lg">✓</span>
                    <span>No pressure, no obligation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-lg">✓</span>
                    <span>Fast & friendly service</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-2">Prefer to call?</p>
                <a href="tel:631-659-0189" className="text-navy font-semibold text-xl hover:text-gold transition-colors">
                  631-659-0189
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
