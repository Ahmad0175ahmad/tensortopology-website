import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';
import React from 'react';

// IntersectionObserver: report "visible" immediately so scroll-started things run in tests
class IO {
  constructor(private cb: IntersectionObserverCallback) {}
  observe(el: Element) {
    this.cb(
      [{ isIntersecting: true, target: el } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver
    );
  }
  unobserve() {}
  disconnect() {}
  takeRecords() { return []; }
}
vi.stubGlobal('IntersectionObserver', IO);

class RO { observe() {} unobserve() {} disconnect() {} }
vi.stubGlobal('ResizeObserver', RO);

// Browser-only setup (skipped for tests that use the node environment)
if (typeof window !== 'undefined') {
  // matchMedia: no reduced motion by default (tests override this when needed)
  window.matchMedia =
    window.matchMedia ||
    (((query: string) => ({
      matches: false, media: query, onchange: null,
      addEventListener() {}, removeEventListener() {},
      addListener() {}, removeListener() {}, dispatchEvent: () => false,
    })) as unknown as typeof window.matchMedia);

  window.HTMLElement.prototype.scrollIntoView = vi.fn();
}

// next/image renders a plain <img> in tests
vi.mock('next/image', () => ({
  default: ({ src, alt, fill, priority, placeholder, blurDataURL, ...rest }: any) =>
    React.createElement('img', { src: typeof src === 'string' ? src : src?.src, alt, ...rest }),
}));
