'use client';

import Link from 'next/link';
import { 
  Building2, 
  ShoppingCart, 
  Hospital, 
  GraduationCap, 
  Headphones, 
  Factory, 
  ShoppingBag, 
  Briefcase 
} from 'lucide-react';

export function IndustriesSection() {
  const industries = [
    {
      title: 'Corporate & Enterprise',
      description: 'Office networking, server management, Microsoft 365 support, cybersecurity, and workflow automation',
      icon: <Building2 className="w-8 h-8" />,
      gradient: 'from-blue-600 via-blue-500 to-cyan-500',
      bgPattern: 'bg-blue-50',
      hoverShadow: 'hover:shadow-blue-500/20',
    },
    {
      title: 'Retail & Supermarkets',
      description: 'POS connectivity, inventory integrations, store networking, Wi-Fi, CCTV/NVR, and automated reporting',
      icon: <ShoppingCart className="w-8 h-8" />,
      gradient: 'from-emerald-600 via-green-500 to-teal-500',
      bgPattern: 'bg-emerald-50',
      hoverShadow: 'hover:shadow-emerald-500/20',
    },
    {
      title: 'Healthcare & Clinics',
      description: 'Secure clinic networks, workstation support, access controls, backup planning, and reliable connectivity',
      icon: <Hospital className="w-8 h-8" />,
      gradient: 'from-red-600 via-pink-500 to-rose-500',
      bgPattern: 'bg-red-50',
      hoverShadow: 'hover:shadow-red-500/20',
    },
    {
      title: 'Education & Universities',
      description: 'Campus LAN/Wi-Fi, computer labs, classroom technology, server administration, and access control',
      icon: <GraduationCap className="w-8 h-8" />,
      gradient: 'from-purple-600 via-purple-500 to-pink-500',
      bgPattern: 'bg-purple-50',
      hoverShadow: 'hover:shadow-purple-500/20',
    },
    {
      title: 'BPO & Call Centres',
      description: 'VoIP connectivity, network performance monitoring, workstation deployment, remote support, and VPNs',
      icon: <Headphones className="w-8 h-8" />,
      gradient: 'from-orange-600 via-amber-500 to-yellow-500',
      bgPattern: 'bg-orange-50',
      hoverShadow: 'hover:shadow-orange-500/20',
    },
    {
      title: 'Manufacturing & Industrial',
      description: 'Business IT networks, server management, secure connectivity, monitoring, backup and disaster-recovery',
      icon: <Factory className="w-8 h-8" />,
      gradient: 'from-slate-600 via-gray-500 to-zinc-500',
      bgPattern: 'bg-slate-50',
      hoverShadow: 'hover:shadow-slate-500/20',
    },
    {
      title: 'E-commerce & Digital',
      description: 'Cloud hosting support, CRM integrations, order workflows, AI assistants, and customer-service automation',
      icon: <ShoppingBag className="w-8 h-8" />,
      gradient: 'from-violet-600 via-indigo-500 to-blue-500',
      bgPattern: 'bg-violet-50',
      hoverShadow: 'hover:shadow-violet-500/20',
    },
    {
      title: 'Small & Medium Businesses',
      description: 'Outsourced IT support, network setup, endpoint management, cloud tools, cybersecurity, and automation',
      icon: <Briefcase className="w-8 h-8" />,
      gradient: 'from-teal-600 via-cyan-500 to-sky-500',
      bgPattern: 'bg-teal-50',
      hoverShadow: 'hover:shadow-teal-500/20',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-gray-900 to-slate-800 text-white text-sm font-semibold rounded-full shadow-lg">
              Industries We Serve
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tailored IT Solutions for Every Industry
          </h2>
          <p className="text-xl text-gray-600">
            Every industry has different technology needs. We help organizations improve operations with practical AI automation, reliable IT infrastructure, and responsive technical support.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-6 shadow-lg ${industry.hoverShadow} hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-gray-100 overflow-hidden`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon Container */}
              <div className="relative mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {industry.icon}
                </div>
                {/* Decorative dot */}
                <div className={`absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-br ${industry.gradient} rounded-full group-hover:scale-150 transition-transform duration-500`}></div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {industry.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {industry.description}
              </p>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-10 shadow-xl border border-gray-100 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full blur-3xl opacity-50"></div>
          
          <div className="relative z-10">
            {/* Free Badge */}
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-full shadow-lg animate-pulse">
                💬 100% FREE CONSULTATION
              </span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              We Love to Help. Seriously!
            </h3>
            <p className="text-lg text-gray-600 mb-3 max-w-2xl mx-auto leading-relaxed">
              Not sure where to start? No problem! We offer <span className="font-bold text-blue-600">free consultations</span> to discuss your IT challenges, understand your needs, and recommend the best solutions — even if you're just exploring options.
            </p>
            <p className="text-base text-gray-500 mb-8 max-w-xl mx-auto">
              Call us at <a href="tel:+923075298122" className="font-semibold text-blue-600 hover:text-purple-600 transition-colors">+92 307 5298122</a> or <a href="tel:+923495710923" className="font-semibold text-blue-600 hover:text-purple-600 transition-colors">+92 349 5710923</a>. Let's chat — no pressure, no commitment!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Book Free Consultation</span>
              </Link>
              
              <a
                href="https://wa.me/923075298122"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp Us</span>
              </a>
            </div>
            
            <p className="text-sm text-gray-400 mt-6">
              ✨ No obligation • Expert advice • Quick response
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
