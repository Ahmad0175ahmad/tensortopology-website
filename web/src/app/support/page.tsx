import Link from 'next/link';
import { Headphones, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Support | TensorTopology',
  description: 'Get help and support for our products and services.',
};

export default function SupportPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Headphones className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Support Center
            </h1>
            <p className="text-xl lg:text-2xl text-white/90">
              We're here to help you succeed
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-blue-100/50 to-cyan-100/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How Can We Help?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <Phone className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Phone Support</h3>
                <p className="text-gray-600 mb-4">Speak directly with our technical team</p>
                <a href="tel:+923075298122" className="text-blue-600 font-semibold hover:underline">
                  +92 307 5298122
                </a>
                <br />
                <a href="tel:+923495710923" className="text-blue-600 font-semibold hover:underline">
                  +92 349 5710923
                </a>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <Mail className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Email Support</h3>
                <p className="text-gray-600 mb-4">Get detailed help via email</p>
                <a href="mailto:tensortopology@gmail.com" className="text-cyan-600 font-semibold hover:underline break-all">
                  tensortopology@gmail.com
                </a>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <MessageCircle className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Quick responses via WhatsApp</p>
                <a href="https://wa.me/923075298122" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <Clock className="w-16 h-16 text-blue-600 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Support Hours</h2>
                  <p className="text-lg text-gray-600 mb-2">
                    <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM (PKT)
                  </p>
                  <p className="text-lg text-gray-600 mb-2">
                    <strong>Saturday:</strong> 10:00 AM - 4:00 PM (PKT)
                  </p>
                  <p className="text-gray-600">
                    For urgent issues outside business hours, please call our emergency support line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Fill out our contact form and we'll get back to you as soon as possible.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold text-lg"
            >
              Contact Support Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
