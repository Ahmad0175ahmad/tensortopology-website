import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Brain, Code, Workflow, FileText } from 'lucide-react';

export default function AIAutomationPage() {
  const services = [
    {
      title: 'AI strategy and planning',
      items: [
        'AI use case identification and feasibility',
        'Readiness assessment',
        'Platform strategy',
        'AI Center of Excellence guidance',
      ],
    },
    {
      title: 'AI-ready data and platform foundation',
      items: [
        'Data assessment',
        'Data modernization',
        'Enterprise data platform guidance',
        'Data operations and governance',
      ],
    },
    {
      title: 'Model development and training',
      items: [
        'Machine learning models',
        'Deep learning solutions',
        'Natural language processing',
        'Computer vision systems',
      ],
    },
    {
      title: 'AI security and operationalization',
      items: [
        'AI security',
        'MLOps / LLMOps',
        'AI governance and lineage',
        'Application enablement',
      ],
    },
  ];

  const subServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Machine Learning',
      description: 'Intelligent systems and models',
      href: '/services/ai-ml',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Software Development',
      description: 'Custom applications and solutions',
      href: '/services/software-dev',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: 'Automation & Testing',
      description: 'Workflow automation and QA',
      href: '/services/automation',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'RAG Systems',
      description: 'Document intelligence solutions',
      href: '/services/rag',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  AI & Automation
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Modernize with carrier-grade infrastructure built for the AI era
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Enable secure, scalable AI across the enterprise. Partner with TensorTopology to design, deploy, 
                  and manage AI-ready infrastructure engineered for performance and resilience.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
                <Image
                  src="/services/ai-automation/hero.jpg"
                  alt="AI Infrastructure Solutions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where AI strategy becomes operational reality */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Where AI strategy becomes operational reality
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  AI success depends on more than innovation. It requires infrastructure built for performance, 
                  security, and resilience.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  TensorTopology helps organizations move from AI exploration to adoption with confidence. We align AI 
                  strategy and AI-ready infrastructure to business outcomes, then design, deploy, and optimize 
                  solutions that support secure operations, scalable performance, and long-term value.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/services/ai-automation/implementation.jpg"
                  alt="AI Strategy Implementation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">AI & Automation Services</h2>
              <p className="text-xl text-gray-600">
                Simplify the complex AI journey with expert advisory and architecture services from TensorTopology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-purple-100/60 to-pink-100/60">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Explore Our AI Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {subServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform with AI?</h2>
            <p className="text-lg text-purple-100 mb-8">Let's discuss how AI and automation can revolutionize your business operations</p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
