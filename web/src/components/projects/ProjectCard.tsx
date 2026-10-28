import Image from 'next/image';
import { Project } from '@/content/projects';
import { Sheet } from '../ui/Sheet';
import { WindowFrame } from '../ui/WindowFrame';
import { IllustrativeBadge } from '../ui/IllustrativeBadge';

type ProjectCardProps = {
  project: Project;
  onImageClick: () => void;
};

export function ProjectCard({ project, onImageClick }: ProjectCardProps) {
  const coverImage = project.images[0];
  const isAI = project.track === 'ai';

  return (
    <Sheet
      track={project.track}
      titleBlock={{
        name: project.title,
        owner: project.owner,
        revision: project.year,
      }}
      className="flex flex-col h-full"
    >
      {/* Eyebrow */}
      <p className="text-xs uppercase tracking-wide text-ink/60 mb-2">{project.eyebrow}</p>

      {/* Title */}
      <h3 className="text-2xl font-heading font-bold mb-4">{project.title}</h3>

      {/* Cover image */}
      <button
        onClick={onImageClick}
        className="relative mb-4 rounded overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-link"
        aria-label={`View images of ${project.title}`}
      >
        {isAI ? (
          <WindowFrame>
            <Image
              src={coverImage.src}
              alt={coverImage.alt}
              width={coverImage.width}
              height={coverImage.height}
              className="w-full h-auto"
              loading="lazy"
            />
          </WindowFrame>
        ) : (
          <div className="aspect-[4/3] relative bg-bp-900 overflow-hidden">
            <Image
              src={coverImage.src}
              alt={coverImage.alt}
              width={coverImage.width}
              height={coverImage.height}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-bp-900/0 group-hover:bg-bp-900/30 transition-colors" />

        {/* Image count badge */}
        {project.images.length > 1 && (
          <div className="absolute top-2 right-2 bg-bp-900/80 text-paper text-xs px-2 py-1 rounded">
            {project.images.length} images
          </div>
        )}

        {/* Illustration badge */}
        {coverImage.kind === 'illustration' && (
          <div className="absolute bottom-2 left-2">
            <IllustrativeBadge />
          </div>
        )}
      </button>

      {/* Summary */}
      <p className="text-ink/80 mb-4">{project.summary}</p>

      {/* Points */}
      <div className="mb-4">
        <p className="font-medium text-ink mb-2">
          {isAI ? 'What it does' : 'What we did'}
        </p>
        <ul className="space-y-1">
          {project.points.map((point, idx) => (
            <li key={idx} className="flex items-start text-sm">
              <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-ink/40 flex-shrink-0" />
              <span className="text-ink/80">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="mb-4">
        <p className="font-medium text-ink mb-2">Technologies</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={`px-2 py-0.5 rounded text-xs break-words max-w-full ${
                isAI
                  ? 'bg-neuron/10 text-neuron border border-neuron/30'
                  : 'bg-fiber/10 text-fiber border border-fiber/30'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Note (if exists) */}
      {project.note && (
        <p className="text-xs text-ink/60 mt-auto pt-4 border-t border-ink/10">{project.note}</p>
      )}
    </Sheet>
  );
}
