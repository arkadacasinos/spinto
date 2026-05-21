'use client';

import Image from 'next/image';

interface GameCardProps {
  id: number;
  name: string;
  image: string;
}

export function GameCard({ id, name, image }: GameCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-card hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 32vw, 16vw"
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          priority={id <= 12}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="absolute inset-0 flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
          Играть
        </button>
      </div>
      <div className="p-3 bg-card border-t border-border">
        <h3 className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
          {name}
        </h3>
      </div>
    </div>
  );
}
