import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function MonitoringPage() {
  return (
    <div className="bg-white">
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Monitoring & Maintenance</h1>
            <p className="text-xl text-gray-600 leading-relaxed">Zabbix and GLPI for comprehensive system monitoring and IT asset management.</p>
          </div>
        </div>
      </section>

      {/* Hero Banner Image */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/services/monitoring/hero.jpg"
                alt="Monitoring & Maintenance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-100 via-indigo-100/60 to-blue-100/60">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Zabbix Monitoring</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Server and network monitoring</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Real-time alerts and notifications</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Performance metrics and dashboards</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">GLPI Asset Management</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">IT asset inventory tracking</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">License management</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Help desk ticketing integration</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proactive Maintenance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Scheduled system checks</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Preventive maintenance tasks</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Issue detection and resolution</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Reporting & Analytics</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Custom reports and graphs</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Trend analysis</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">SLA compliance tracking</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need System Monitoring?</h2>
            <p className="text-lg text-indigo-100 mb-8">Let's implement proactive monitoring solutions</p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
