import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Cloud, GitBranch, Monitor, HeadphonesIcon } from 'lucide-react';

export default function CloudDevOpsPage() {
  const services = [
    {
      title: 'Cloud architecture',
      items: [
        'Azure cloud solutions',
        'Multi-cloud strategies',
        'Infrastructure as Code',
        'Cloud migration',
      ],
    },
    {
      title: 'DevOps automation',
      items: [
        'CI/CD pipelines',
        'Container orchestration',
        'Automated deployments',
        'Release management',
      ],
    },
    {
      title: 'Monitoring & operations',
      items: [
        'Zabbix monitoring',
        'GLPI asset management',
        'Performance tracking',
        'Incident management',
      ],
    },
    {
      title: 'Support services',
      items: [
        'Remote IT support',
        '24/7 monitoring',
        'System maintenance',
        'Technical assistance',
      ],
    },
  ];

  const subServices = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Services',
      description: 'Cloud infrastructure',
      href: '/services/cloud',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: 'DevOps Solutions',
      description: 'CI/CD and automation',
      href: '/services/devops',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: 'Remote IT Support',
      description: 'Online technical assistance',
      href: '/services/remote-support',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Monitoring & Maintenance',
      description: 'Zabbix and GLPI',
      href: '/services/monitoring',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Cloud & DevOps
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Modernize with cloud infrastructure and DevOps automation
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Enable agile development and scalable operations. Partner with TensorTopology to design, deploy, 
                  and manage cloud solutions and DevOps pipelines engineered for speed, reliability, and innovation.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20"></div>
                <Image
                  src="/services/cloud-devops/hero.jpg"
                  alt="Cloud & DevOps Solutions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where cloud meets continuous delivery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Where cloud meets continuous delivery
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Modern success depends on more than infrastructure. It requires cloud platforms and DevOps practices 
                  built for agility, automation, and continuous improvement.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  TensorTopology helps organizations embrace modern development practices with confidence. We design 
                  cloud architectures and DevOps workflows that accelerate delivery, reduce costs, and enable teams 
                  to focus on innovation rather than infrastructure management.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/services/cloud-devops/implementation.jpg"
                  alt="Cloud DevOps Implementation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud & DevOps Services Grid */}
      <section className="py-20 bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Cloud & DevOps Services</h2>
              <p className="text-xl text-gray-600">
                Comprehensive solutions from cloud architecture to DevOps automation and ongoing support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
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
      <section className="py-20 bg-gradient-to-br from-gray-100 via-indigo-100/60 to-purple-100/60">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Explore Our Cloud & DevOps Services</h2>
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
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready for Modern DevOps?</h2>
            <p className="text-lg text-indigo-100 mb-8">Let's accelerate your software delivery with cloud and automation</p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
