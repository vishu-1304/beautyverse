import React from 'react';
import Container from '../components/ui/Container';

export const Hero: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 bg-neutral-cream-100 dark:bg-neutral-obsidian-950 text-neutral-obsidian-900 dark:text-neutral-cream-100 border-b border-neutral-cream-200 dark:border-neutral-obsidian-900">
      <Container size="xl" padding="airy">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] text-brand-gold-600 dark:text-brand-gold-400 font-serif">
            Welcome to BeautyVerse
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-light tracking-tight">
            The Digital Sanctuary of Personal Aesthetics
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-cream-700 dark:text-neutral-cream-300 font-sans max-w-2xl mx-auto leading-relaxed">
            Bridging interactive AI face canvas diagnostics with virtual makeover simulations, personalized cosmetic passports, and curated community style galleries.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <div className="w-32 h-10 bg-neutral-cream-200 dark:bg-neutral-obsidian-800 rounded-full flex items-center justify-center text-xs text-neutral-cream-500 tracking-wider uppercase font-semibold">
              Action Unit
            </div>
            <div className="w-32 h-10 border border-neutral-cream-300 dark:border-neutral-obsidian-750 rounded-full flex items-center justify-center text-xs text-neutral-cream-500 tracking-wider uppercase font-semibold">
              Secondary Action
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
