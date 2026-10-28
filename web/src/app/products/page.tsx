import Link from 'next/link';
import { projects } from '@/content/projects';

export const metadata = {
  title: 'Our Products | TensorTopology',
  description: 'Explore our portfolio of AI, Automation, and Networking solutions.',
};

export default function ProductsPage() {
  const aiProjects = projects.filter(p => p.track === 'ai');
  const networkProjects = projects.filter(p => p.track === 'network');
  
  // Group network projects
  const quickShopProjects = networkProjects.filter(p => p.id.includes('quickshop'));
  const otherNetworkProjects = networkProjects.filter(p => !p.id.includes('quickshop'));

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl lg:text-2xl text-white/90">
              Real-world solutions delivering measurable results
            </p>
          </div>
        </div>
      </section>

      {/* AI & Automation Products */}
      <section id="ai-automation" className="py-20 bg-gradient-to-br from-fuchsia-100 via-purple-100 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI & Automation</h2>
            <p className="text-lg text-gray-600">
              Intelligent systems that learn, adapt, and automate business processes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiProjects.map((project) => (
              <Link
                key={project.id}
                href={`/products/${project.id}`}
                className="group block bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-fuchsia-500 hover:shadow-xl transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-fuchsia-500 via-purple-500 to-pink-500 relative overflow-hidden">
                  {project.images[0] && (
                    <img
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-xs text-fuchsia-600 font-semibold uppercase tracking-wider mb-2">
                    {project.eyebrow}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-fuchsia-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-fuchsia-50 text-fuchsia-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Networking Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Networking Solutions</h2>
            <p className="text-lg text-gray-600">
              Custom network solutions and infrastructure deployments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherNetworkProjects.map((project) => (
              <Link
                key={project.id}
                href={`/products/${project.id}`}
                className="group block bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-orange-500 hover:shadow-xl transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-500 relative overflow-hidden">
                  {project.images[0] && (
                    <img
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-xs text-orange-600 font-semibold uppercase tracking-wider mb-2">
                    {project.eyebrow}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IT Infrastructure - Quick Shop */}
      <section id="it-infrastructure" className="py-20 bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">IT Infrastructure</h2>
            <p className="text-lg text-gray-600 mb-6">
              Complete IT setup for Quick Shop Cash & Carry - Islamabad
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 inline-block">
              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">16</div>
                  <div className="text-sm text-gray-600">IP Cameras</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">2</div>
                  <div className="text-sm text-gray-600">Wi-Fi Cameras</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">4</div>
                  <div className="text-sm text-gray-600">PCs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">2</div>
                  <div className="text-sm text-gray-600">IP Printers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">1</div>
                  <div className="text-sm text-gray-600">Wi-Fi Device</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">1</div>
                  <div className="text-sm text-gray-600">Biometric Terminal</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickShopProjects.map((project) => (
              <Link
                key={project.id}
                href={`/products/${project.id}`}
                className="group block bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-cyan-500 hover:shadow-xl transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 relative overflow-hidden">
                  {project.images[0] && (
                    <img
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {project.images[0]?.kind === 'illustration' && (
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                      Illustrative
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-cyan-50 text-cyan-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We can build tailored solutions to meet your specific requirements
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
