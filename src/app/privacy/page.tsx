import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | First Heritage Insurance Agency',
  description: 'Privacy policy for First Heritage Insurance Agency. Learn how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy py-16">
        <div className="container-custom">
          <h1 className="font-poppins text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-gray-300 mt-2">Last Updated: October 10, 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="prose prose-lg max-w-4xl mx-auto">
            <h2 className="font-poppins text-2xl font-bold text-navy mt-8 mb-4">Commitment to Privacy</h2>
            <p className="text-gray-600 mb-6">
              First Heritage Insurance Agency (&quot;FHIA,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="font-poppins text-2xl font-bold text-navy mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Personal identification information (name, email address, phone number, address)</li>
              <li>Insurance-related information necessary for quotes and policies</li>
              <li>Financial information for payment processing</li>
              <li>Website usage data through cookies and similar technologies</li>
            </ul>

            <h2 className="font-poppins text-2xl font-bold text-navy mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Provide insurance quotes and policy services</li>
              <li>Process transactions and payments</li>
              <li>Communicate with you about your policies and services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>

            <h2 className="font-poppins text-2xl font-bold text-navy mt-8 mb-4">How We Share Your Information</h2>
            <p className="text-gray-600 mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Insurance carriers for underwriting and policy issuance</li>
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p className="text-gray-600 mb-6">
              We do not sell your personal information to third parties.
            </p>

            <h2 className="font-poppins text-2xl font-bold text-navy mt-8 mb-4">Your Privacy Rights</h2>
            <p className="text-gray-600 mb-6">
              Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. California residents have additional rights under the CCPA/CPRA.
            </p>

            <h2 className="font-poppins text-2xl font-bold text-navy mt-8 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="font-poppins text-2xl font-bold text-navy mt-8 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-600 mb-6">
              We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings.
            </p>

            <h2 className="font-poppins text-2xl font-bold text-navy mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-6">
              If you have questions about this Privacy Policy, please contact us at:
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
