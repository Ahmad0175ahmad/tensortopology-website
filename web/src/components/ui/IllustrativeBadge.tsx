export function IllustrativeBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-block px-2 py-1 rounded-full text-xs bg-paper/20 text-paper/80 ${className}`}
    >
      Illustrative image
    </span>
  );
}
