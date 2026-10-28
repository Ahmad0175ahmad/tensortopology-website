import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function CablingPage() {
  return (
    <div className="bg-white">
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-slate-100 via-gray-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Structured Cabling</h1>
            <p className="text-xl text-gray-600 leading-relaxed">Professional network cabling infrastructure for reliable connectivity.</p>
          </div>
        </div>
      </section>

      {/* Hero Banner Image */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/services/cabling/hero.jpg"
                alt="Structured Cabling"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-100 via-slate-100/60 to-blue-100/60">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Category Cabling</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Cat5e, Cat6, Cat6a installation</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Data and voice cabling</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Patch panel termination</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fiber Optic</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Single-mode and multi-mode fiber</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Fiber splicing and termination</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Long-distance connectivity</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cable Management</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Cable trays and raceways</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Labeling and documentation</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Organized rack installations</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Testing & Certification</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Cable testing and verification</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Performance certification</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Compliance documentation</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Network Cabling?</h2>
            <p className="text-lg text-blue-100 mb-8">Let's install professional cabling infrastructure</p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
