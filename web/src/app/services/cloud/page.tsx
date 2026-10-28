import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function CloudPage() {
  return (
    <div className="bg-white">
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Cloud Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">Cloud infrastructure and migration solutions for modern businesses.</p>
          </div>
        </div>
      </section>

      {/* Hero Banner Image */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/services/cloud/hero.jpg"
                alt="Cloud Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-100 via-sky-100/60 to-blue-100/60">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Azure Solutions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Azure virtual machines and storage</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Azure OpenAI and AI services</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Azure DevOps pipelines</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Migration</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Assessment and planning</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Data and application migration</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Hybrid cloud setup</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Infrastructure as Code</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Terraform and ARM templates</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Automated provisioning</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Configuration management</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Optimization</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Resource right-sizing</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Reserved instances planning</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Cost monitoring and alerts</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready for the Cloud?</h2>
            <p className="text-lg text-indigo-100 mb-8">Let's migrate your infrastructure to the cloud</p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
