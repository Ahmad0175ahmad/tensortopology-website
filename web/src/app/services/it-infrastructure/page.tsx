import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Server, Cable, Video, Fingerprint } from 'lucide-react';

export default function ITInfrastructurePage() {
  const services = [
    {
      title: 'Server infrastructure',
      items: [
        'Windows & Linux servers',
        'Virtualization platforms',
        'Storage solutions',
        'Backup and recovery',
      ],
    },
    {
      title: 'Physical infrastructure',
      items: [
        'Structured cabling',
        'Rack installations',
        'Cable management',
        'Site surveys',
      ],
    },
    {
      title: 'Security systems',
      items: [
        'CCTV installation',
        'IP camera deployment',
        'NVR configuration',
        'Access control',
      ],
    },
    {
      title: 'Workstation setup',
      items: [
        'PC configuration',
        'POS systems',
        'Peripheral installation',
        'Hardware support',
      ],
    },
  ];

  const subServices = [
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Server Configuration',
      description: 'Windows & Linux servers',
      href: '/services/servers',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Cable className="w-8 h-8" />,
      title: 'Structured Cabling',
      description: 'Network infrastructure',
      href: '/services/cabling',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'CCTV Installation',
      description: 'Surveillance systems',
      href: '/services/cctv',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: 'Biometric Access',
      description: 'Access control systems',
      href: '/services/biometric',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  IT Infrastructure
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Build comprehensive IT infrastructure for operational excellence
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Enable reliable operations across your organization. Partner with TensorTopology to design, deploy, 
                  and manage complete IT infrastructure engineered for performance, security, and business continuity.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20"></div>
                <Image
                  src="/services/it-infrastructure/hero.jpg"
                  alt="IT Infrastructure Solutions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where IT infrastructure drives business success */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Where IT infrastructure drives business success
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Infrastructure success depends on more than hardware. It requires integrated systems built for 
                  reliability, security, and operational efficiency.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  TensorTopology helps organizations build complete IT foundations with confidence. We assess your needs, 
                  design integrated solutions, and deploy infrastructure that supports your operations today while 
                  scaling for tomorrow's growth.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/services/it-infrastructure/implementation.jpg"
                  alt="IT Infrastructure Implementation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Infrastructure Services Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-100 via-cyan-100 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">IT Infrastructure Services</h2>
              <p className="text-xl text-gray-600">
                Complete infrastructure solutions from servers and cabling to security systems
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
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
      <section className="py-20 bg-gradient-to-br from-gray-100 via-blue-100/60 to-cyan-100/60">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Explore Our Infrastructure Services</h2>
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Complete IT Infrastructure?</h2>
            <p className="text-lg text-blue-100 mb-8">Let's build robust infrastructure for your business operations</p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
