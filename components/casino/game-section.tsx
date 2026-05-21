'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { GameCard } from './game-card';

export interface Game {
  id: string;
  title: string;
  image: string;
  provider?: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

interface GameSectionProps {
  title: string;
  games: Game[];
  icon?: React.ReactNode;
}

export function GameSection({ title, games, icon }: GameSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="w-full py-6 md:py-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4 px-4 md:px-6 lg:px-0">
        <div className="flex items-center gap-3">
          {icon && <div className="text-[#00d4ff]">{icon}</div>}
          <h2 className="text-lg md:text-xl font-bold text-white">
            {title}
          </h2>
          <span className="text-xs text-gray-400 font-medium">({games.length})</span>
        </div>
        <a href="#" className="text-xs md:text-sm text-[#00d4ff] hover:text-[#ff00ff] transition-colors font-semibold">
          See All →
        </a>
      </div>

      {/* Carousel Container */}
      <div className="relative group">
        {/* Left Arrow - Desktop */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-[#1a0d2e] border border-[#2a1650] text-[#00d4ff] hover:bg-[#2a1650] hover:border-[#00d4ff] hover:shadow-[0_0_10px_rgba(0,212,255,0.4)] transition-all opacity-0 group-hover:opacity-100"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide px-4 md:px-6 lg:px-0"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex gap-3 md:gap-4 w-min md:w-auto">
            {games.map((game) => (
              <GameCard
                key={game.id}
                id={game.id}
                title={game.title}
                image={game.image}
                provider={game.provider}
                isNew={game.isNew}
                isFeatured={game.isFeatured}
              />
            ))}
          </div>
        </div>

        {/* Right Arrow - Desktop */}
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-[#1a0d2e] border border-[#2a1650] text-[#00d4ff] hover:bg-[#2a1650] hover:border-[#00d4ff] hover:shadow-[0_0_10px_rgba(0,212,255,0.4)] transition-all opacity-0 group-hover:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
