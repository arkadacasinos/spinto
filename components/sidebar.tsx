'use client';

import { Gamepad2, Zap, Star, Flame, Grid3x3, Trophy, Settings, User, LogOut } from 'lucide-react';

const mainNav = [
  { icon: Gamepad2, label: 'Популярные', id: 'popular' },
  { icon: Zap, label: 'Провайдеры', id: 'providers' },
  { icon: Star, label: 'Коллекции', id: 'collections' },
  { icon: Flame, label: 'Новички', id: 'new' },
  { icon: Grid3x3, label: 'Live казино', id: 'live' },
  { icon: Trophy, label: 'Слоты', id: 'slots' },
];

const secondaryNav = [
  { icon: Settings, label: 'Настройки', id: 'settings' },
  { icon: User, label: 'Профиль', id: 'profile' },
  { icon: LogOut, label: 'Выход', id: 'logout' },
];

export function Sidebar() {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 w-24 h-screen bg-sidebar border-r border-sidebar-border flex-col items-center py-6 gap-8 z-50">
      {/* Logo */}
      <div className="w-16 h-16 bg-gradient-neon rounded-lg flex items-center justify-center">
        <span className="text-xl font-bold text-white">S</span>
      </div>

      {/* Main Navigation */}
      <nav className="flex flex-col gap-4 flex-1">
        {mainNav.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className="relative w-12 h-12 rounded-lg flex items-center justify-center hover:bg-sidebar-primary/20 transition-colors group"
              title={item.label}
            >
              <Icon className="w-6 h-6 text-sidebar-foreground group-hover:text-sidebar-primary transition-colors" />
              <span className="absolute left-full ml-2 bg-sidebar-primary text-black px-2 py-1 rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Secondary Navigation */}
      <nav className="flex flex-col gap-2">
        {secondaryNav.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className="relative w-12 h-12 rounded-lg flex items-center justify-center hover:bg-sidebar-accent/20 transition-colors group"
              title={item.label}
            >
              <Icon className="w-5 h-5 text-sidebar-foreground group-hover:text-sidebar-accent transition-colors" />
              <span className="absolute left-full ml-2 bg-sidebar-accent text-black px-2 py-1 rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
