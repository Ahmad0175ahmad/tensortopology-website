import Link from 'next/link';
import { FileText, CheckCircle, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Case Studies | TensorTopology',
  description: 'Real-world success stories and project outcomes from our clients.',
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl lg:text-2xl text-white/90">
              See how we've helped businesses transform with technology
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-cyan-100/50 to-blue-100/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-12">
                  <div className="text-sm text-cyan-600 font-semibold uppercase tracking-wider mb-3">
                    Featured Project
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Quick Shop Cash & Carry
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Complete IT infrastructure deployment including CCTV surveillance, biometric access control, POS systems, and wireless networking for a retail store in Islamabad.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">18 IP and Wi-Fi cameras installed</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Biometric attendance system deployed</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Complete network and POS infrastructure</span>
                    </div>
                  </div>
                  <Link
                    href="/products#it-infrastructure"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
                  >
                    View Project Details
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center p-12">
                  <TrendingUp className="w-32 h-32 text-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Coming */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              More Case Studies Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're documenting more client success stories. Check back soon or view our current projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold text-lg"
              >
                View All Projects
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white border-2 border-cyan-600 text-cyan-600 rounded-lg hover:bg-cyan-50 transition-all font-semibold text-lg"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
