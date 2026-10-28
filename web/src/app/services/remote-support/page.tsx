import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function RemoteSupportPage() {
  return (
    <div className="bg-white">
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Remote IT Support</h1>
            <p className="text-xl text-gray-600 leading-relaxed">Online technical assistance and troubleshooting for your IT needs.</p>
          </div>
        </div>
      </section>

      {/* Hero Banner Image */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/services/remote-support/hero.jpg"
                alt="Remote IT Support"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-100 via-cyan-100/60 to-blue-100/60">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Help Desk Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">24/7 technical support</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Ticket management system</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Priority-based response</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Remote Access</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">TeamViewer and AnyDesk</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Secure remote connections</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Screen sharing and control</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Troubleshooting</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Hardware and software issues</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Network connectivity problems</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Application support</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Documentation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Knowledge base creation</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">User guides and tutorials</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Issue resolution logs</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Remote IT Support?</h2>
            <p className="text-lg text-indigo-100 mb-8">Let's provide expert technical assistance</p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
