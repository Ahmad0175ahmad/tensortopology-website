import { Shield } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | TensorTopology',
  description: 'Our commitment to protecting your privacy and data.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-700 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Privacy Policy
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
                At TensorTopology, we are committed to protecting your privacy and ensuring the security of your personal information.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. Information We Collect</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Information</h3>
              <p className="text-gray-600 mb-4">
                When you contact us or use our services, we may collect:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Name and contact information (email, phone number)</li>
                <li>Company name and business details</li>
                <li>Project requirements and technical specifications</li>
                <li>Communication preferences</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Information</h3>
              <p className="text-gray-600 mb-4">
                We automatically collect certain technical information when you visit our website:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website and search terms used</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. How We Use Your Information</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Send project updates and service information</li>
                <li>Improve our website and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. Information Sharing</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
              <p className="text-gray-600 mb-4">
                We do not sell, rent, or share your personal information with third parties except:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and property</li>
                <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">4. Data Security</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
              <p className="text-gray-600 mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Encrypted data transmission (SSL/TLS)</li>
                <li>Secure server infrastructure</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">5. Your Rights</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access your personal information we hold</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your data</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">6. Cookies</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
              <p className="text-gray-600">
                Our website uses cookies to improve your browsing experience. Cookies are small text files stored on your device. You can control cookie settings through your browser preferences. Disabling cookies may affect some website functionality.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">7. Children's Privacy</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
              <p className="text-gray-600">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">8. Changes to This Policy</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
              <p className="text-gray-600">
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date. We encourage you to review this policy regularly.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">9. Contact Us</h2>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200 mb-8">
              <p className="text-gray-700 mb-4 font-medium">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
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
