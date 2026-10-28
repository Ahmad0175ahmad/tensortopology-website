import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Shield, Lock, Activity, Settings } from 'lucide-react';

export default function FirewallPage() {
  return (
    <div className="bg-white">
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-orange-100 via-red-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Firewall Configuration</h1>
            <p className="text-xl text-gray-600 leading-relaxed">Network security solutions that protect your infrastructure from threats.</p>
          </div>
        </div>
      </section>

      {/* Hero Banner Image */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/services/firewall/hero.jpg"
                alt="Firewall Configuration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-100 via-orange-100/60 to-red-100/60">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <Shield className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Next-Gen Firewalls</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Advanced threat protection</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Intrusion prevention systems</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Application awareness and control</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <Lock className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Security Policies</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Custom rule configuration</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Access control lists (ACLs)</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Network segmentation</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <Activity className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Monitoring & Logging</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Real-time traffic analysis</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Security event logging</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Compliance reporting</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <Settings className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Management & Support</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Centralized management</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Regular security updates</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">24/7 support available</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Secure Your Network?</h2>
            <p className="text-lg text-orange-100 mb-8">Let's configure robust firewall protection</p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
