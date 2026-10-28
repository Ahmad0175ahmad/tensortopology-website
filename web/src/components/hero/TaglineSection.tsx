'use client';

export function TaglineSection() {
  return (
    <section className="relative py-16 flex items-center justify-center bg-bp-900/30">
      <div className="text-center px-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-tight">
          <span className="inline-block text-paper drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-2">
            AI agents that think
          </span>
          <br />
          <span className="inline-block text-paper drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mt-2">
            Networks that never sleep
          </span>
        </h2>
      </div>
    </section>
  );
}
