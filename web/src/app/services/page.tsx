import Link from 'next/link';
import { Code, Network, Server, Cloud } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 'ai-automation',
      title: 'AI & Automation',
      description: 'Intelligent systems and machine learning solutions that transform your business operations',
      icon: <Code className="w-12 h-12" />,
      gradient: 'from-purple-500 to-pink-500',
      features: ['Machine Learning', 'AI Agents', 'RAG Systems', 'Process Automation'],
    },
    {
      id: 'networking',
      title: 'Networking',
      description: 'Secure and scalable network infrastructure solutions for modern businesses',
      icon: <Network className="w-12 h-12" />,
      gradient: 'from-orange-500 to-red-500',
      features: ['Network Design', 'CCTV Systems', 'Wi-Fi Setup', 'Security Solutions'],
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      description: 'Complete IT infrastructure setup, management, and optimization services',
      icon: <Server className="w-12 h-12" />,
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Server Setup', 'POS Systems', 'Workstations', 'Hardware Installation'],
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'Modern cloud solutions and automated deployment pipelines',
      icon: <Cloud className="w-12 h-12" />,
      gradient: 'from-indigo-500 to-purple-500',
      features: ['Cloud Architecture', 'Azure Solutions', 'CI/CD Pipelines', 'DevOps Consulting'],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What We Do
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive IT solutions from AI & Automation to Network Infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Let's discuss how our services can transform your business
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
