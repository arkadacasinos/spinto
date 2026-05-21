'use client';

import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { NavigationBar } from '@/components/navigation-bar';
import { GameSection } from '@/components/game-section';
import { SeoContent } from '@/components/seo-content';
import { Footer } from '@/components/footer';
import { sections } from '@/lib/games';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Sidebar for Desktop */}
      <Sidebar />

      {/* Vertical layout for main content */}
      <div className="flex flex-col flex-1 md:ml-24">
        {/* Header - Always on top */}
        <Header />

        {/* Mobile Navigation Bar - Under header */}
        <NavigationBar />

        {/* Main Content */}
        <main className="flex-1 w-full">
          {/* Hero Banner */}
          <section className="relative w-full h-64 md:h-96 overflow-hidden rounded-none md:rounded-lg md:mx-4 md:mt-4">
            <Image
              src="/hero-banner.jpg"
              alt="Casino Hero Banner"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                <span className="neon-cyan">Черный</span>
                <br />
                <span className="neon-pink">эндорфины</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                от спинто +1500% на первый депозит
              </p>
              <button className="px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:shadow-lg hover:shadow-primary/50 transition-all">
                Автоматизирован
              </button>
            </div>
          </section>

          {/* Jackpot Display */}
          <section className="px-4 md:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="md:col-span-2 bg-card rounded-lg p-6 neon-border-cyan">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-muted-foreground text-sm mb-2">ДЖЕКПОТ</p>
                  <p className="text-4xl md:text-5xl font-bold neon-cyan">₽61,963.97</p>
                </div>
                <Image
                  src="/games/lucky-777.jpg"
                  alt="Jackpot"
                  width={120}
                  height={120}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 neon-border-pink flex flex-col justify-between">
              <div>
                <p className="text-muted-foreground text-sm mb-2">Бонус сегодня до</p>
                <p className="text-3xl font-bold neon-pink">1500₽</p>
              </div>
              <button className="mt-4 w-full px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-bold hover:bg-secondary/90 transition-colors">
                Автоматизирован
              </button>
            </div>
          </section>

          {/* Game Sections */}
          <div className="w-full">
            {sections.map((section) => (
              <GameSection
                key={section.id}
                title={section.title}
                games={section.games}
              />
            ))}
          </div>

          {/* SEO Content */}
          <SeoContent />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
