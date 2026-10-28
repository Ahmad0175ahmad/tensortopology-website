'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: 'AI & Machine Learning Solutions',
    subtitle: 'Intelligent systems that learn, adapt, and deliver real results',
    description: 'From RAG systems to multi-agent AI - we build AI that solves real business problems.',
    cta: 'Explore AI Services',
    href: '/services/ai-automation',
    image: '/images/hero/ai-automation.jpg',
    gradient: 'from-purple-600/90 to-pink-600/90',
  },
  {
    title: 'Network Infrastructure',
    subtitle: 'Secure, reliable networks that power your business',
    description: 'Expert firewall configuration, switching, wireless solutions, and VPN connectivity.',
    cta: 'View Network Services',
    href: '/services/networking',
    image: '/images/hero/networking.jpg',
    gradient: 'from-orange-600/90 to-red-600/90',
  },
  {
    title: 'IT Infrastructure & Cabling',
    subtitle: 'Professional structured cabling and IT infrastructure',
    description: 'Complete data center setup, server racks, patch panels, and cable management.',
    cta: 'Infrastructure Services',
    href: '/services/it-infrastructure',
    image: '/images/hero/infrastructure.jpg',
    gradient: 'from-blue-600/90 to-cyan-600/90',
  },
  {
    title: 'Cloud & DevOps',
    subtitle: 'Modern cloud solutions and automation',
    description: 'Cloud migration, CI/CD pipelines, monitoring, and remote IT support.',
    cta: 'Cloud Solutions',
    href: '/services/cloud-devops',
    image: '/images/hero/cloud-devops.jpg',
    gradient: 'from-indigo-600/90 to-purple-600/90',
  },
  {
    title: 'Security Systems',
    subtitle: 'CCTV, biometric access, and surveillance solutions',
    description: 'Complete security systems with IP cameras, NVR/DVR, and access control.',
    cta: 'Security Services',
    href: '/services/cctv',
    image: '/images/hero/security.jpg',
    gradient: 'from-gray-800/90 to-gray-600/90',
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2500); // Change slide every 2.5 seconds (half of 5 seconds)

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto-play after 5s
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[380px] lg:h-[480px] overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Background Image with subtle overlay */}
          <div className="absolute inset-0">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />
            {/* Subtle dark overlay only for text readability - no color */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-3xl text-white">
              <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                {slide.subtitle}
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg lg:text-xl mb-6 text-white/90 max-w-2xl drop-shadow-md">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={slide.href}
                  className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-base shadow-lg"
                >
                  {slide.cta}
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg hover:bg-white/20 transition-colors font-semibold text-base"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-colors text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-colors text-white"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
