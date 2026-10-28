import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative w-10 h-10">
        <Image
          src="/brand/logo-mark-on-light.svg"
          alt="TensorTopology"
          width={40}
          height={40}
          className="group-hover:scale-110 transition-transform"
        />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        TensorTopology
      </span>
    </Link>
  );
}
