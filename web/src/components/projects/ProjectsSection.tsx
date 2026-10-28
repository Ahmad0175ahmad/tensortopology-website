'use client';

import { useState } from 'react';
import { projects } from '@/content/projects';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from './ProjectCard';
import { Lightbox } from './Lightbox';

type Filter = 'all' | 'ai' | 'network';

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>('all');
  const [lightboxProject, setLightboxProject] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.track === filter;
  });

  const openLightbox = (projectId: string, startIndex: number = 0) => {
    setLightboxProject(projectId);
    setLightboxIndex(startIndex);
  };

  const closeLightbox = () => {
    setLightboxProject(null);
    setLightboxIndex(0);
  };

  const currentProject = projects.find((p) => p.id === lightboxProject);

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading id="projects-heading">Projects</SectionHeading>
        <p className="text-xl text-paper/70 mb-8 max-w-3xl">
          Recent work from both sides of the team.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setFilter('all')}
            aria-pressed={filter === 'all'}
            className={`px-5 py-2 rounded-md font-medium transition-colors ${
              filter === 'all'
                ? 'bg-link text-bp-900'
                : 'bg-paper/10 text-paper hover:bg-paper/20'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('ai')}
            aria-pressed={filter === 'ai'}
            className={`px-5 py-2 rounded-md font-medium transition-colors ${
              filter === 'ai'
                ? 'bg-neuron text-bp-900'
                : 'bg-paper/10 text-paper hover:bg-paper/20'
            }`}
          >
            AI & Automation
          </button>
          <button
            onClick={() => setFilter('network')}
            aria-pressed={filter === 'network'}
            className={`px-5 py-2 rounded-md font-medium transition-colors ${
              filter === 'network'
                ? 'bg-fiber text-bp-900'
                : 'bg-paper/10 text-paper hover:bg-paper/20'
            }`}
          >
            Networking
          </button>
        </div>

        {/* Projects grid - using flexbox for equal heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="flex">
              <ProjectCard project={project} onImageClick={() => openLightbox(project.id)} />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxProject && currentProject && (
        <Lightbox
          images={currentProject.images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={setLightboxIndex}
          title={currentProject.title}
        />
      )}
    </section>
  );
}
