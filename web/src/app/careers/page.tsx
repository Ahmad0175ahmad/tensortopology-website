import Link from 'next/link';
import { Briefcase, Users, TrendingUp, Heart } from 'lucide-react';

export const metadata = {
  title: 'Careers | TensorTopology',
  description: 'Join our team and help build the future of AI and networking solutions.',
};

export default function CareersPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Briefcase className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl lg:text-2xl text-white/90">
              Be part of building innovative AI and networking solutions
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-blue-100/50 to-purple-100/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why TensorTopology?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Collaborative Culture</h3>
                <p className="text-gray-600">Work with talented engineers in a supportive, growth-oriented environment.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cutting-Edge Projects</h3>
                <p className="text-gray-600">Work on innovative AI, automation, and networking projects for real clients.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <Heart className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Work-Life Balance</h3>
                <p className="text-gray-600">Flexible work arrangements and a culture that values your wellbeing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Open Positions Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're growing! Check back soon for exciting career opportunities, or reach out to express your interest.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold text-lg"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
