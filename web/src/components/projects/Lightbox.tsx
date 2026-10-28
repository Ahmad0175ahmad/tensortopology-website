'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectImage } from '@/content/projects';
import { IllustrativeBadge } from '../ui/IllustrativeBadge';

type LightboxProps = {
  images: ProjectImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
  title: string;
};

export function Lightbox({ images, currentIndex, onClose, onNavigate, title }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const currentImage = images[currentIndex];

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = 'hidden';
    
    // Add history entry when lightbox opens
    window.history.pushState({ lightboxOpen: true }, '');
    
    // Handle browser back button
    const handlePopState = (e: PopStateEvent) => {
      // If user presses back while lightbox is open, close it and stay on page
      e.preventDefault();
      onClose();
    };
    
    window.addEventListener('popstate', handlePopState);
    
    // Focus trap and keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      } else if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
        onNavigate(currentIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [currentIndex, images.length, onClose, onNavigate]);

  const handlePrevious = () => {
    onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image viewer for ${title}`}
      className="fixed inset-0 z-50 bg-bp-900/95 backdrop-blur-sm flex items-center justify-center p-4 pt-20"
      onClick={onClose}
      ref={dialogRef}
      tabIndex={-1}
    >
      <div
        className="relative w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: 'calc(100vh - 2rem)' }}
      >
        {/* Image - Constrained to fit viewport */}
        <div className="relative bg-bp-700 rounded-lg overflow-hidden max-w-6xl w-full" style={{ maxHeight: 'calc(100vh - 10rem)' }}>
          {/* Close button - Inside image container, always visible */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-bp-900/90 text-paper hover:bg-bp-900 hover:text-link transition-colors p-2 rounded-full shadow-lg"
            aria-label="Close"
          >
            <X size={28} strokeWidth={2.5} />
          </button>
          
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            width={currentImage.width}
            height={currentImage.height}
            className="w-full h-full object-contain"
            style={{ maxHeight: 'calc(100vh - 10rem)' }}
          />
        </div>

        {/* Caption and counter */}
        <div className="mt-4 space-y-2 max-w-6xl w-full">
          <div className="flex items-center justify-between">
            <p className="text-paper/80 text-sm">{currentImage.alt}</p>
            {currentImage.kind === 'illustration' && <IllustrativeBadge />}
          </div>
          <p className="text-paper/60 text-sm">
            {currentIndex + 1} of {images.length}
          </p>
        </div>

        {/* Navigation arrows (if more than one image) */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-bp-900/80 text-paper p-3 rounded-full hover:bg-bp-900 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-bp-900/80 text-paper p-3 rounded-full hover:bg-bp-900 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
