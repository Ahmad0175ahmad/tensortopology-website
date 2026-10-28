import { FileText } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | TensorTopology',
  description: 'Terms and conditions for using our services.',
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-700 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-white/90">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
              <p className="text-gray-700 font-medium mb-2">
                Please read these Terms of Service carefully before using TensorTopology's services.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. Acceptance of Terms</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
              <p className="text-gray-600">
                By accessing or using TensorTopology's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Services Description</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
              <p className="text-gray-600 mb-4">
                TensorTopology provides professional IT services including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>AI & Machine Learning solutions and development</li>
                <li>Software development and automation services</li>
                <li>Network infrastructure design and implementation</li>
                <li>IT infrastructure setup and maintenance</li>
                <li>Cloud services and DevOps solutions</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Specific service details, deliverables, and timelines will be defined in individual project agreements.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. User Responsibilities</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
              <p className="text-gray-600 mb-4">
                When using our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Comply with all applicable local, national, and international laws</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">4. Intellectual Property</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Property</h3>
              <p className="text-gray-600 mb-4">
                All content, designs, code, and materials created by TensorTopology remain our intellectual property unless otherwise specified in a written agreement. This includes but is not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Website content and design</li>
                <li>Software and code frameworks</li>
                <li>Documentation and methodologies</li>
                <li>Trademarks and branding</li>
              </ul>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">Client Property</h3>
              <p className="text-gray-600">
                Custom work developed specifically for clients may be transferred to the client upon full payment, as specified in individual project agreements. Client data and confidential information remain the property of the client.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">5. Payment Terms</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Project fees and payment schedules will be outlined in individual contracts</li>
                <li>Payment is typically required in milestones or phases as agreed</li>
                <li>Late payments may incur additional fees</li>
                <li>All prices are in Pakistani Rupees (PKR) or US Dollars (USD) as specified</li>
                <li>Refund policies will be defined in project agreements</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">6. Confidentiality</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
              <p className="text-gray-600 mb-4">
                We respect the confidentiality of your business information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Client information will be kept confidential</li>
                <li>Non-disclosure agreements (NDAs) can be signed upon request</li>
                <li>We will not share project details without permission</li>
                <li>Confidential data will be protected with appropriate security measures</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">7. Warranties and Disclaimers</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
              <p className="text-gray-600 mb-4">
                While we strive for excellence:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Services are provided "as is" without warranty unless specified in writing</li>
                <li>We make reasonable efforts to ensure accuracy and reliability</li>
                <li>We do not guarantee uninterrupted or error-free service</li>
                <li>Specific warranties will be outlined in project agreements</li>
                <li>We are not liable for third-party services or products</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">8. Limitation of Liability</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
              <p className="text-gray-600">
                To the maximum extent permitted by law, TensorTopology shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues. Our total liability shall not exceed the amount paid for the specific service in question.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">9. Termination</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
              <p className="text-gray-600 mb-4">
                Either party may terminate services:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>As specified in individual project agreements</li>
                <li>For breach of these terms (with notice period)</li>
                <li>By mutual written agreement</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Upon termination, outstanding payments become due, and we will return client data as agreed.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">10. Modifications</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
              <p className="text-gray-600">
                We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">11. Governing Law</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
              <p className="text-gray-600">
                These Terms of Service shall be governed by and construed in accordance with the laws of Pakistan. Any disputes shall be resolved in the courts of Islamabad, Pakistan.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">12. Contact Information</h2>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200 mb-8">
              <p className="text-gray-700 mb-4 font-medium">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Company:</strong> TensorTopology</p>
                <p><strong>Email:</strong> <a href="mailto:tensortopology@gmail.com" className="text-blue-600 hover:underline">tensortopology@gmail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+923075298122" className="text-blue-600 hover:underline">+92 307 5298122</a></p>
                <p><strong>Address:</strong> Islamabad, Pakistan</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
