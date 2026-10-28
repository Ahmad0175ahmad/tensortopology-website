'use client';

import { Logo } from '../ui/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-paper/10 py-12 mt-24" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Logo />
            <p className="text-paper/60 text-sm text-center md:text-left">
              AI and networking, built by two engineers.
            </p>
          </div>
          <div className="text-paper/60 text-sm text-center md:text-right">
            © {currentYear} TensorTopology
          </div>
        </div>
      </div>
    </footer>
  );
}
