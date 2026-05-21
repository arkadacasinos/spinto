'use client';

import { GameCard } from './game-card';

interface GameSectionProps {
  title: string;
  games: Array<{
    id: number;
    name: string;
    image: string;
  }>;
}

export function GameSection({ title, games }: GameSectionProps) {
  return (
    <section className="w-full px-4 py-8 md:px-6 lg:px-8">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
          <span className="w-1 h-8 bg-primary rounded-full" />
          {title}
        </h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3 lg:gap-4 w-full">
        {games.map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
      </div>
    </section>
  );
}
