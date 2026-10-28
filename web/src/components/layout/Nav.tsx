'use client';

import { useState, useEffect } from 'react';
import { Logo } from '../ui/Logo';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'AI & Automation', href: '#ai-automation' },
  { name: 'Networking', href: '#networking' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Only trigger when section is in middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the entry with highest intersection ratio that's actually intersecting
      let maxRatio = 0;
      let newActiveSection = '';

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          newActiveSection = entry.target.id;
        }
      });

      // Only update if we found an intersecting section
      if (newActiveSection) {
        setActiveSection(newActiveSection);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = ['about', 'ai-automation', 'networking', 'projects', 'contact'];
    const sectionElements: Element[] = [];
    
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        sectionElements.push(element);
      }
    });

    return () => {
      sectionElements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  const getActiveColor = (href: string) => {
    const sectionId = href.replace('#', '');
    if (activeSection === sectionId) {
      if (sectionId === 'ai-automation') return 'text-neuron font-bold';
      if (sectionId === 'networking') return 'text-fiber font-bold';
      return 'text-link font-bold';
    }
    return 'text-paper/70 hover:text-paper';
  };

  const getActiveIndicator = (href: string) => {
    const sectionId = href.replace('#', '');
    if (activeSection === sectionId) {
      if (sectionId === 'ai-automation') return 'bg-neuron';
      if (sectionId === 'networking') return 'bg-fiber';
      return 'bg-link';
    }
    return 'bg-transparent';
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    
    if (element) {
      // Immediately update active section
      setActiveSection(sectionId);
      
      // Smooth scroll to section
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Update URL hash without jumping
      window.history.pushState(null, '', href);
    }
    
    // Close mobile menu
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-bp-900/95 backdrop-blur-sm border-b border-paper/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Skip to content link */}
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-link text-bp-900 px-4 py-2 rounded"
          >
            Skip to content
          </a>

          <div className="flex items-center gap-3">
            <Logo />
            <div className="flex gap-1.5">
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === 'ai-automation' ? 'bg-neuron scale-125' : 'bg-neuron/30'
                }`}
                aria-hidden="true"
              />
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === 'networking' ? 'bg-fiber scale-125' : 'bg-fiber/30'
                }`}
                aria-hidden="true"
              />
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection && !['ai-automation', 'networking'].includes(activeSection) ? 'bg-link scale-125' : 'bg-link/30'
                }`}
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative transition-all duration-300 ${getActiveColor(link.href)}`}
                >
                  {link.name}
                  {/* Active indicator underline */}
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-all duration-300 ${getActiveIndicator(link.href)} ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-paper"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-paper/10 pt-4">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block py-2 px-3 rounded-lg transition-all duration-300 ${getActiveColor(link.href)} ${
                    isActive ? 'bg-white/5 border-l-4' : 'border-l-4 border-transparent'
                  }`}
                  style={
                    isActive
                      ? {
                          borderLeftColor:
                            sectionId === 'ai-automation'
                              ? '#FF1CF7'
                              : sectionId === 'networking'
                              ? '#FF6B35'
                              : '#00D9FF',
                        }
                      : undefined
                  }
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
