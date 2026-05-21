'use client';

import { Gamepad2, Zap, Star, Flame, Grid3x3, Trophy } from 'lucide-react';

const navItems = [
  { icon: Gamepad2, label: 'Популярные', id: 'popular' },
  { icon: Zap, label: 'Провайдеры', id: 'providers' },
  { icon: Star, label: 'Коллекции', id: 'collections' },
  { icon: Flame, label: 'Новички', id: 'new' },
  { icon: Grid3x3, label: 'Live', id: 'live' },
  { icon: Trophy, label: 'Слоты', id: 'slots' },
];

export function NavigationBar() {
  return (
    <nav className="w-full bg-sidebar border-b border-sidebar-border sticky top-[72px] z-30 md:hidden">
      <div className="flex items-center justify-between overflow-x-auto scrollbar-hide px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className="flex flex-col items-center justify-center gap-0.5 flex-1 min-h-16 px-2 py-2 text-sidebar-foreground hover:text-sidebar-primary transition-colors border-b-2 border-transparent hover:border-sidebar-primary"
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-semibold text-center leading-none">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
