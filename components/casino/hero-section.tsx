'use client';

import { Gift, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden rounded-lg md:rounded-xl">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2a1650] via-[#1a0d2e] to-[#0f0520]" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff00ff]/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-[#00d4ff] bg-[#00d4ff]/10">
            <Zap size={16} className="text-[#00d4ff]" />
            <span className="text-xs font-semibold text-[#00d4ff]">MEGA PROMO</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight">
            Покори бонусную
          </h1>
          
          <p className="text-sm md:text-base text-gray-300 mb-6">
            Получи 200% бонус на первый депозит и играй в лучшие слоты с максимальными коэффициентами выигрыша
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Button className="bg-gradient-to-r from-[#00d4ff] to-[#00b8cc] text-black font-semibold hover:from-[#00e6ff] hover:to-[#00d4ff] hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]">
              <Gift size={18} className="mr-2" />
              Получить Бонус
            </Button>
            <Button
              variant="outline"
              className="border border-[#2a1650] text-[#00d4ff] hover:bg-[#1a0d2e] hover:border-[#00d4ff]"
            >
              Подробнее
            </Button>
          </div>

          {/* Promo Info */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#00d4ff]" />
              <span className="text-gray-300">Без отыгрыша</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#ff00ff]" />
              <span className="text-gray-300">Только для новых игроков</span>
            </div>
          </div>
        </div>

        {/* Right Side - Bonus Card */}
        <div className="flex-1 w-full max-w-sm">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] to-[#ff00ff] rounded-lg opacity-50 blur group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-[#1a0d2e] border border-[#2a1650] rounded-lg p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">БОНУС</span>
                <Gift className="text-[#00d4ff]" size={24} />
              </div>
              
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-2">Размер бонуса</p>
                <div className="text-4xl md:text-5xl font-bold text-white">200%</div>
              </div>

              <div className="space-y-2 mb-6 pb-6 border-b border-[#2a1650]">
                <p className="text-xs text-gray-400">Мин. депозит: <span className="text-[#00d4ff]">$10</span></p>
                <p className="text-xs text-gray-400">Макс. бонус: <span className="text-[#ff00ff]">$1000</span></p>
                <p className="text-xs text-gray-400">Срок действия: <span className="text-white">30 дней</span></p>
              </div>

              <Button className="w-full bg-gradient-to-r from-[#00d4ff] to-[#00b8cc] text-black font-semibold hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]">
                Активировать
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
