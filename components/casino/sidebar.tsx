'use client';

import {
  Home,
  Gamepad2,
  Zap,
  Star,
  Users,
  Gift,
  Settings,
  HelpCircle,
} from 'lucide-react';

const navigationItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: Gamepad2, label: 'Games' },
  { icon: Zap, label: 'Hot' },
  { icon: Star, label: 'Favorites' },
  { icon: Users, label: 'Live' },
  { icon: Gift, label: 'Promotions' },
  { icon: Settings, label: 'Settings' },
  { icon: HelpCircle, label: 'Support' },
];

export function Sidebar() {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-20 flex-col items-center justify-start gap-4 border-r border-[#2a1650] bg-[#0a0415] pt-4">
      {/* Logo */}
      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#ff00ff] flex items-center justify-center text-white font-bold text-lg hover:shadow-[0_0_15px_rgba(0,212,255,0.6)] transition-shadow">
        C
      </div>

      <div className="h-px w-full bg-[#2a1650]" />

      {/* Navigation */}
      <nav className="flex flex-col gap-4 flex-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={`group relative p-3 rounded-lg transition-all ${
                item.active
                  ? 'bg-[#1a0d2e] text-[#00d4ff] shadow-[0_0_10px_rgba(0,212,255,0.3)]'
                  : 'text-gray-400 hover:text-[#00d4ff] hover:bg-[#1a0d2e]'
              }`}
              title={item.label}
            >
              <Icon size={20} />
              {/* Tooltip */}
              <div className="absolute left-full ml-2 hidden group-hover:block bg-[#1a0d2e] text-white text-xs py-1 px-2 rounded whitespace-nowrap border border-[#2a1650]">
                {item.label}
              </div>
            </button>
          );
        })}
      </nav>

      <div className="h-px w-full bg-[#2a1650]" />

      {/* Profile Avatar */}
      <button className="mb-4 h-10 w-10 rounded-full bg-gradient-to-br from-[#ff00ff] to-[#ff6600] flex items-center justify-center text-white font-bold hover:shadow-[0_0_15px_rgba(255,0,255,0.6)] transition-shadow">
        U
      </button>
    </aside>
  );
}
