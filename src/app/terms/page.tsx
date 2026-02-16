import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | First Heritage Insurance Agency',
  description: 'Terms and conditions for using First Heritage Insurance Agency services and website.',
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-navy py-16">
        <div className="container-custom">
          <h1 className="font-poppins text-4xl font-bold text-white">Terms & Conditions</h1>
          <p className="text-gray-300 mt-2">Last Updated: October 10, 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="prose prose-lg max-w-4xl mx-auto">
            <h2 className="font-poppins text-2xl font-bold text-navy mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using the First Heritage Insurance Agency (&quot;FHIA&quot;) website and services, you accept and agree to be bound by these Terms and Conditions.
            </p>

            <h2 className="font-poppins text-2xl font-bold text-navy mt-8 mb-4">2. Description of Services</h2>
            <p className="text-gray-600 mb-6">
              FHIA provides insurance brokerage services, including quotes, policy placement, and customer support for various insurance products including auto, home, business, and specialty insurance.
            </p>

            <h2 className="font-poppins text-2xl font-bold text-navy mt-8 mb-4">3. Agency Relationship and Authority</h2>
            <p className="text-gray-600 mb-6">
              FHIA acts as an independent insurance broker. We represent you, the client, in finding appropriate coverage from various insurance carriers. We do not have authority to bind coverage without carrier approval.
            </p>

            <h2 className="font-poppins text-2xl font-bold text-navy mt-8 mb-4">4. Quotes and Coverage</h2>
            <p className="text-gray-600 mb-6">
              Insurance quotes provided are estimates based on information you provide and are subject to change upon underwriting review. Final coverage terms are determined by the issuing insurance carrier.
            </p>

            <h2 className="font-poppins text-2xl font-bold text-navy mt-8 mb-4">5. No Coverage Advice or Guarantees</h2>
            <p className="text-gray-600 mb-6">
              While we provide guidance on insurance options, we do not provide legal, financial, or tax advice. We recommend consulting appropriate professionals for specific advice. Coverage is subject to policy terms and conditions.
            </p>

            <h2 className="font-poppins text-2xl font-bold text-navy mt-8 mb-4">6. Licensed States and Limitations</h2>
            <p className="text-gray-600 mb-6">
              FHIA is licensed to conduct insurance business in New York, New Jersey, Connecticut, Pennsylvania, and Florida. Services are limited to these jurisdictions.
            </p>

            <h2 className="font-poppins text-2xl font-bold text-navy mt-8 mb-4">7. Website Use and Restrictions</h2>
            <p className="text-gray-600 mb-6">
              You agree to use this website only for lawful purposes. You may not use this site in any way that could damage, disable, or impair the site or interfere with any other party&apos;s use.
            </p>

            <h2 className="font-poppins text-2xl font-bold text-navy mt-8 mb-4">8. Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              All content on this website, including text, graphics, logos, and images, is the property of FHIA or its content suppliers and is protected by copyright and other intellectual property laws.
            </p>

            <h2 className="font-poppins text-2xl font-bold text-navy mt-8 mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-gray-600 mb-6">
              This website and services are provided &quot;as is&quot; without warranty of any kind, either express or implied. FHIA does not warrant that the website will be uninterrupted or error-free.
            </p>

            <h2 className="font-poppins text-2xl font-bold text-navy mt-8 mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              FHIA shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services.
            </p>

            <h2 className="font-poppins text-2xl font-bold text-navy mt-8 mb-4">11. Contact Information</h2>
            <p className="text-gray-600 mb-6">
              For questions about these Terms & Conditions, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 font-semibold">First Heritage Insurance Agency</p>
              <p className="text-gray-600">324 S. Service Rd, Suite 101</p>
              <p className="text-gray-600">Melville, NY 11747</p>
              <p className="text-gray-600">Phone: 631-659-0189</p>
              <p className="text-gray-600">Email: service@fhia.net</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
