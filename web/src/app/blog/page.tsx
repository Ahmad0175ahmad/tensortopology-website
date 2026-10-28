import Link from 'next/link';
import { BookOpen, TrendingUp, Lightbulb } from 'lucide-react';

export const metadata = {
  title: 'Blog | TensorTopology',
  description: 'Insights on AI, automation, and networking from our team of experts.',
};

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl lg:text-2xl text-white/90">
              Insights, tutorials, and industry updates from our team
            </p>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-indigo-100/50 to-purple-100/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What We Write About</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <Lightbulb className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI & Machine Learning</h3>
                <p className="text-gray-600">Latest trends in AI, practical ML tutorials, and real-world case studies.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Networking & Infrastructure</h3>
                <p className="text-gray-600">Best practices for network design, security, and IT infrastructure.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <BookOpen className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">DevOps & Automation</h3>
                <p className="text-gray-600">Guides on CI/CD, containerization, and workflow automation.</p>
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
              Articles Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're preparing valuable content to share our knowledge and experience. Stay tuned for our first posts!
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold text-lg"
            >
              Subscribe for Updates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
