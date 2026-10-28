import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Shield, Network, Wifi, Lock } from 'lucide-react';

export default function NetworkingPage() {
  const services = [
    {
      title: 'Network design and architecture',
      items: [
        'Network topology planning',
        'Infrastructure assessment',
        'Scalability strategy',
        'Performance optimization',
      ],
    },
    {
      title: 'Security solutions',
      items: [
        'Firewall configuration',
        'VPN setup and management',
        'Network segmentation',
        'Security audits',
      ],
    },
    {
      title: 'Infrastructure deployment',
      items: [
        'Switches and routers',
        'Wireless access points',
        'Structured cabling',
        'Network monitoring',
      ],
    },
    {
      title: 'Surveillance systems',
      items: [
        'CCTV installation',
        'IP camera setup',
        'NVR configuration',
        'Remote monitoring',
      ],
    },
  ];

  const subServices = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Firewall Configuration',
      description: 'Network security solutions',
      href: '/services/firewall',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Switch Configuration',
      description: 'Network infrastructure',
      href: '/services/switches',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Wireless Solutions',
      description: 'Wi-Fi and access points',
      href: '/services/wireless',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'VPN & Remote Access',
      description: 'Secure connectivity',
      href: '/services/vpn',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Networking Solutions
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Build secure, scalable network infrastructure for the modern enterprise
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Enable reliable connectivity across your organization. Partner with TensorTopology to design, deploy, 
                  and manage network infrastructure engineered for security, performance, and growth.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20"></div>
                <Image
                  src="/services/networking/hero.jpg"
                  alt="Network Infrastructure Solutions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where network infrastructure meets business needs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Where network infrastructure meets business needs
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Network success depends on more than connectivity. It requires infrastructure built for security, 
                  reliability, and scalability.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  TensorTopology helps organizations build robust network foundations with confidence. We align network 
                  architecture to business requirements, then design, deploy, and optimize solutions that support 
                  secure operations, reliable connectivity, and future growth.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/services/networking/implementation.jpg"
                  alt="Network Strategy Implementation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Networking Services Grid */}
      <section className="py-20 bg-gradient-to-br from-orange-100 via-red-100/70 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Networking Services</h2>
              <p className="text-xl text-gray-600">
                Comprehensive network solutions from design to deployment and ongoing management
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
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
      <section className="py-20 bg-gradient-to-br from-gray-100 via-orange-100/60 to-red-100/60">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Explore Our Networking Services</h2>
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
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Network Infrastructure?</h2>
            <p className="text-lg text-orange-100 mb-8">Let's build a secure and scalable network solution for your business</p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
