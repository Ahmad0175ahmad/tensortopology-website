import Link from 'next/link';
import { Book, Code, Server, Cloud, Network } from 'lucide-react';

export const metadata = {
  title: 'Documentation | TensorTopology',
  description: 'Technical documentation and guides for our services and solutions.',
};

export default function DocsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-violet-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Book className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Documentation
            </h1>
            <p className="text-xl lg:text-2xl text-white/90">
              Technical guides and documentation for our services
            </p>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-violet-100/50 to-purple-100/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Documentation Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <Code className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI & ML APIs</h3>
                <p className="text-sm text-gray-600">Integration guides for our AI services</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <Network className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Network Setup</h3>
                <p className="text-sm text-gray-600">Configuration guides and best practices</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <Server className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Infrastructure</h3>
                <p className="text-sm text-gray-600">Server and hardware documentation</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <Cloud className="w-10 h-10 text-cyan-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cloud & DevOps</h3>
                <p className="text-sm text-gray-600">Deployment and automation guides</p>
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
              Comprehensive Documentation Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're preparing detailed technical documentation for all our services. Need help now? Contact our team directly.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold text-lg"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
