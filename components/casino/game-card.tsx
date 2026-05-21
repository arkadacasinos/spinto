'use client';

import Image from 'next/image';

interface GameCardProps {
  id: string;
  title: string;
  image: string;
  provider?: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

export function GameCard({ title, image, provider, isNew, isFeatured }: GameCardProps) {
  return (
    <button className="flex-shrink-0 group relative overflow-hidden rounded-lg transition-all duration-300">
      {/* Card Background */}
      <div className="relative h-40 sm:h-48 md:h-56 w-32 sm:w-40 md:w-48 bg-[#1a0d2e] border border-[#2a1650] rounded-lg overflow-hidden hover:border-[#00d4ff] hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]">
        {/* Game Image */}
        <div className="relative w-full h-full bg-gradient-to-b from-[#2a1650] to-[#1a0d2e]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 right-2 flex gap-2">
          {isNew && (
            <span className="text-xs font-bold px-2 py-1 rounded bg-gradient-to-r from-[#00d4ff] to-[#00b8cc] text-black">
              NEW
            </span>
          )}
          {isFeatured && (
            <span className="text-xs font-bold px-2 py-1 rounded bg-gradient-to-r from-[#ff00ff] to-[#ff6600] text-white">
              HOT
            </span>
          )}
        </div>

        {/* Content - Bottom */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-3">
          <h3 className="text-white font-semibold text-xs sm:text-sm line-clamp-2 group-hover:text-[#00d4ff] transition-colors">
            {title}
          </h3>
          {provider && (
            <p className="text-gray-400 text-xs mt-1">{provider}</p>
          )}
        </div>

        {/* Play Button - Shows on Hover */}
        <button className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300 opacity-0 group-hover:opacity-100">
          <div className="h-12 w-12 rounded-full border-2 border-[#00d4ff] flex items-center justify-center text-[#00d4ff] group-hover:shadow-[0_0_15px_rgba(0,212,255,0.6)] transition-shadow">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M6 4l12 6-12 6V4z" />
            </svg>
          </div>
        </button>
      </div>
    </button>
  );
}
