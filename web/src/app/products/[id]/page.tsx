import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/content/projects';
import { CheckCircle } from 'lucide-react';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  const gradient = project.track === 'ai' 
    ? 'from-fuchsia-500 via-purple-500 to-pink-500'
    : 'from-cyan-500 via-blue-500 to-indigo-500';

  const textColor = project.track === 'ai' ? 'text-fuchsia-600' : 'text-cyan-600';
  const bgColor = project.track === 'ai' ? 'bg-fuchsia-50' : 'bg-cyan-50';
  const heroBg = project.track === 'ai'
    ? 'from-fuchsia-100 via-purple-100 to-pink-100'
    : 'from-cyan-100 via-blue-100 to-indigo-100';

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className={`relative pt-24 pb-20 bg-gradient-to-br ${heroBg}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={`inline-block px-4 py-1 ${bgColor} border border-current rounded-full text-sm font-semibold ${textColor} mb-6`}>
              {project.eyebrow}
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className={`px-4 py-2 ${bgColor} ${textColor} rounded-lg font-medium`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Images Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-8">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-full rounded-xl overflow-hidden shadow-lg"
                  style={{ aspectRatio: `${image.width}/${image.height}` }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="w-full h-auto object-contain"
                  />
                  {image.kind === 'illustration' && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <p className="text-white text-sm">Illustrative image</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-slate-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {project.track === 'ai' ? 'What It Does' : 'What We Did'}
            </h2>
            <div className="grid gap-4">
              {project.points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm"
                >
                  <CheckCircle className={`w-6 h-6 ${textColor} flex-shrink-0 mt-0.5`} />
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className={`text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>
                  {project.year}
                </div>
                <div className="text-gray-600">Year Completed</div>
              </div>
              <div>
                <div className={`text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>
                  {project.tech.length}
                </div>
                <div className="text-gray-600">Technologies Used</div>
              </div>
              <div>
                <div className={`text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>
                  {project.track === 'ai' ? 'AI' : 'Network'}
                </div>
                <div className="text-gray-600">Project Type</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto bg-gradient-to-r ${gradient} rounded-2xl p-12 text-center text-white`}>
            <h2 className="text-3xl font-bold mb-4">
              Interested in a Similar Solution?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              We can build custom solutions tailored to your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/products"
                className="inline-block px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-colors"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
