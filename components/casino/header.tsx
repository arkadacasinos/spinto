'use client';

import { Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[#2a1650] bg-gradient-to-b from-[#1a0d2e] to-[#0f0520] backdrop-blur-md">
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#ff00ff] flex items-center justify-center text-white font-bold text-sm">
              C
            </div>
            <span className="hidden sm:inline text-lg font-bold neon-cyan">CASINO</span>
          </div>

          {/* Desktop Search Bar - only visible on md+ */}
          <div className="hidden md:flex flex-1 mx-6 max-w-xs">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#00d4ff]" />
              <input
                type="text"
                placeholder="Search games..."
                className="w-full bg-[#1a0d2e] border border-[#2a1650] rounded-lg pl-10 pr-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff]"
              />
            </div>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden sm:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-[#00d4ff] hover:bg-[#1a0d2e]"
            >
              Login
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-[#00d4ff] to-[#00b8cc] text-black font-semibold hover:from-[#00e6ff] hover:to-[#00d4ff]"
            >
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden p-2 text-[#00d4ff]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#2a1650] bg-[#1a0d2e] px-4 py-4">
            <div className="mb-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#00d4ff]" />
                <input
                  type="text"
                  placeholder="Search games..."
                  className="w-full bg-[#0f0520] border border-[#2a1650] rounded-lg pl-10 pr-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4ff]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Button
                variant="ghost"
                className="w-full text-[#00d4ff] justify-start hover:bg-[#2a1650]"
              >
                Login
              </Button>
              <Button className="w-full bg-gradient-to-r from-[#00d4ff] to-[#00b8cc] text-black font-semibold">
                Register
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
