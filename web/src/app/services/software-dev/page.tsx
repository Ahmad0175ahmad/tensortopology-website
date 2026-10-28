import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Code, Smartphone, Globe, Database } from 'lucide-react';

export default function SoftwareDevPage() {
  return (
    <div className="bg-white">
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Software Development</h1>
            <p className="text-xl text-gray-600 leading-relaxed">Custom applications and solutions built with modern technologies and best practices.</p>
          </div>
        </div>
      </section>

      {/* Hero Banner Image */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/services/software-dev/hero.jpg"
                alt="Software Development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-100 via-purple-100/60 to-blue-100/60">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <Globe className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Web Applications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">React, Next.js, Vue.js development</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Progressive web applications</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Responsive and accessible design</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <Code className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Backend Development</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">RESTful and GraphQL APIs</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Python, Node.js, .NET solutions</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Microservices architecture</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <Globe className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">E-Commerce Solutions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Online store development</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Payment gateway integration</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Shopping cart and checkout systems</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <Database className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Database Design</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">SQL and NoSQL databases</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Data modeling and optimization</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Database migration services</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Custom Software?</h2>
            <p className="text-lg text-purple-100 mb-8">Let's build your next application</p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
