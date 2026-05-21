'use client';

import { Search, Bell, LogIn, UserPlus, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-card border-b border-border">
      <div className="px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">S</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  SPINTO
                </div>
                <div className="text-xs text-primary font-bold">CASINO</div>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Поиск игр..."
                className="pl-10 bg-muted border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors md:flex hidden">
              <Bell className="w-5 h-5 text-foreground" />
            </button>
            <Button
              size="sm"
              className="hidden sm:flex gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <LogIn className="w-4 h-4" />
              Вход
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="hidden sm:flex gap-2 border-primary text-primary hover:bg-primary/10"
            >
              <UserPlus className="w-4 h-4" />
              Регистрация
            </Button>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors md:hidden">
              <Menu className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
