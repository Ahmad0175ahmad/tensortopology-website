'use client';

import { team } from '@/content/site';
import { Sheet } from '../ui/Sheet';
import { SectionHeading } from '../ui/SectionHeading';
import { ExternalLink, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function About() {
  const [hoveredPerson, setHoveredPerson] = useState<string | null>(null);

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-1 h-1 bg-link rounded-full animate-float-slow" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-1 h-1 bg-link rounded-full animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-link rounded-full animate-float-slow" style={{ animationDelay: '4s' }} />
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-link rounded-full animate-float-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading id="about-heading">About</SectionHeading>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {team.map((person) => (
            <div
              key={person.id}
              onMouseEnter={() => setHoveredPerson(person.id)}
              onMouseLeave={() => setHoveredPerson(null)}
              className="group relative"
            >
              {/* Outer glow effect */}
              <div className={`absolute -inset-1 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                person.id === 'ahmed' ? 'bg-neuron/20' : 'bg-fiber/20'
              }`} />

              {/* Card with gradient background */}
              <div className={`relative rounded-xl border-2 transition-all duration-500 overflow-hidden ${
                person.id === 'ahmed'
                  ? 'border-neuron/30 bg-gradient-to-br from-neuron/10 via-neuron/5 to-transparent group-hover:border-neuron group-hover:shadow-2xl group-hover:shadow-neuron/20'
                  : 'border-fiber/30 bg-gradient-to-br from-fiber/10 via-fiber/5 to-transparent group-hover:border-fiber group-hover:shadow-2xl group-hover:shadow-fiber/20'
              } group-hover:scale-[1.02]`}>
                <div className="relative p-8">
                  {/* Animated background glow */}
                  <div className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    person.id === 'ahmed' ? 'bg-neuron/10' : 'bg-fiber/10'
                  }`} />
                  <div className={`absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    person.id === 'ahmed' ? 'bg-neuron/5' : 'bg-fiber/5'
                  }`} style={{ transitionDelay: '100ms' }} />

                  <div className="relative z-10">
                    {/* Avatar circle with initials and animated border */}
                    <div className="mb-6 relative inline-block">
                      <div className={`absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        person.id === 'ahmed' ? 'bg-neuron/40' : 'bg-fiber/40'
                      }`} />
                      <div
                        className={`relative w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold transition-all duration-500 ${
                          person.id === 'ahmed'
                            ? 'bg-gradient-to-br from-neuron/30 to-neuron/10 text-neuron border-2 border-neuron/50 group-hover:border-neuron group-hover:shadow-lg group-hover:shadow-neuron/30'
                            : 'bg-gradient-to-br from-fiber/30 to-fiber/10 text-fiber border-2 border-fiber/50 group-hover:border-fiber group-hover:shadow-lg group-hover:shadow-fiber/30'
                        } group-hover:scale-110`}
                      >
                        {person.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                      {hoveredPerson === person.id && (
                        <div className="absolute -top-2 -right-2 animate-bounce">
                          <Sparkles className={person.id === 'ahmed' ? 'text-neuron' : 'text-fiber'} size={20} />
                        </div>
                      )}
                    </div>

                    {/* Name and role */}
                    <h3 className="text-3xl font-heading font-bold mb-2 group-hover:text-link transition-colors">
                      {person.name}
                    </h3>
                    <p className={`text-lg mb-6 font-medium ${
                      person.id === 'ahmed' ? 'text-neuron' : 'text-fiber'
                    }`}>
                      {person.role}
                    </p>

                    {/* Bio */}
                    <p className="text-paper/90 mb-6 leading-relaxed">{person.bio}</p>

                    {/* Highlights with animated bullets */}
                    <ul className="space-y-3 mb-8">
                      {person.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start group/item">
                          <span className={`mr-3 mt-2 w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300 ${
                            person.id === 'ahmed'
                              ? 'bg-neuron/40 group-hover/item:bg-neuron group-hover/item:scale-150'
                              : 'bg-fiber/40 group-hover/item:bg-fiber group-hover/item:scale-150'
                          }`} />
                          <span className="text-paper/90 group-hover/item:text-paper transition-colors">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Links with better styling */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          person.id === 'ahmed'
                            ? 'bg-neuron/15 border border-neuron/30 text-neuron hover:bg-neuron hover:text-bp-900 hover:shadow-lg hover:shadow-neuron/30'
                            : 'bg-fiber/15 border border-fiber/30 text-fiber hover:bg-fiber hover:text-bp-900 hover:shadow-lg hover:shadow-fiber/30'
                        } hover:scale-105`}
                      >
                        <ExternalLink size={16} />
                        LinkedIn
                      </a>
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium bg-link/15 border border-link/30 text-link hover:bg-link hover:text-bp-900 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-link/30"
                      >
                        Contact {person.name.split(' ')[0]}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline with animation */}
        <div className="text-center">
          <p className="text-2xl md:text-3xl text-paper font-bold font-heading inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-neuron/10 via-link/10 to-fiber/10 rounded-xl backdrop-blur-sm border border-link/20 shadow-xl">
            <span className="w-2 h-2 bg-neuron rounded-full animate-pulse" />
            The AI runs on the network. We build both.
            <span className="w-2 h-2 bg-fiber rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) translateX(10px);
            opacity: 0.8;
          }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
