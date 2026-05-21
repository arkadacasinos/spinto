'use client';

import { Crown, Zap } from 'lucide-react';

interface JackpotDisplayProps {
  amount: number;
  label?: string;
  animated?: boolean;
}

export function JackpotDisplay({ amount, label = 'ДЖЕКПОТ', animated = true }: JackpotDisplayProps) {
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);

  return (
    <div className={`group relative w-full md:w-auto ${animated ? 'animate-pulse' : ''}`}>
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff]/20 to-[#ff6600]/20 rounded-lg blur-lg group-hover:blur-xl group-hover:from-[#ff00ff]/40 group-hover:to-[#ff6600]/40 transition-all" />

      {/* Card */}
      <div className="relative bg-gradient-to-b from-[#2a1650] to-[#1a0d2e] border-2 border-[#ff00ff] rounded-lg p-4 md:p-6 shadow-[0_0_20px_rgba(255,0,255,0.3)] group-hover:shadow-[0_0_30px_rgba(255,0,255,0.5)] transition-shadow">
        {/* Header */}
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <div className="flex items-center gap-2">
            <Crown size={20} className="text-[#ff00ff] animate-bounce" style={{ animationDelay: '0s' }} />
            <span className="text-xs md:text-sm font-bold text-[#ff00ff] tracking-widest">{label}</span>
          </div>
          <Zap size={20} className="text-[#ff6600] animate-bounce" style={{ animationDelay: '0.1s' }} />
        </div>

        {/* Amount */}
        <div className="mb-3 md:mb-4">
          <p className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#ff6600] leading-none">
            {formattedAmount}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 md:gap-3 pt-3 md:pt-4 border-t border-[#2a1650]">
          <div>
            <p className="text-xs text-gray-500 mb-1">Players</p>
            <p className="text-sm md:text-base font-bold text-[#00d4ff]">12.4k</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Probability</p>
            <p className="text-sm md:text-base font-bold text-[#00ff88]">1 in 2M</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Last Win</p>
            <p className="text-sm md:text-base font-bold text-[#ffaa00]">2h ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
