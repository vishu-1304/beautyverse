import React from 'react';
import Container from '../components/ui/Container';

export const PassportPreview: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-neutral-cream-100 dark:bg-neutral-obsidian-950 text-neutral-obsidian-900 dark:text-neutral-cream-100 border-b border-neutral-cream-200 dark:border-neutral-obsidian-900">
      <Container size="xl" padding="airy">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Passport Visual Skeleton */}
          <div className="lg:col-span-6 order-last lg:order-first flex justify-center">
            <div className="w-full max-w-md bg-neutral-cream-50 dark:bg-neutral-obsidian-900 border border-brand-gold-200/50 dark:border-brand-gold-900/30 rounded-2xl p-6 sm:p-8 shadow-luxury-lg space-y-6 relative overflow-hidden">
              {/* Header */}
              <div className="flex justify-between items-start border-b border-neutral-cream-200 dark:border-neutral-obsidian-800 pb-4">
                <div>
                  <h4 className="text-sm font-serif font-semibold tracking-wider text-neutral-obsidian-950 dark:text-neutral-cream-50 uppercase">
                    Beauty Passport
                  </h4>
                  <p className="text-[10px] text-brand-gold-600 dark:text-brand-gold-400 uppercase tracking-widest font-mono">
                    ID: BV-88402-A
                  </p>
                </div>
                <div className="w-6 h-6 rounded-full bg-brand-gold-500/20 border border-brand-gold-400" />
              </div>

              {/* Grid data */}
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="space-y-1">
                  <span className="text-[9px] text-neutral-cream-500 uppercase">Skin Tone Mapping</span>
                  <p className="text-neutral-obsidian-950 dark:text-neutral-cream-100 font-semibold">Warm Alabaster #E42</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] text-neutral-cream-500 uppercase">Undertone Index</span>
                  <p className="text-neutral-obsidian-950 dark:text-neutral-cream-100 font-semibold">Soft Peach (Warm)</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] text-neutral-cream-500 uppercase">Primary Match</span>
                  <p className="text-neutral-obsidian-950 dark:text-neutral-cream-100 font-semibold">Blush / Sandstone</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] text-neutral-cream-500 uppercase">Sensitivity Index</span>
                  <p className="text-neutral-obsidian-950 dark:text-neutral-cream-100 font-semibold">Dry / Fragile (Low-pH)</p>
                </div>
              </div>

              {/* Bar list */}
              <div className="space-y-3 pt-2">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-neutral-cream-600 dark:text-neutral-cream-400">
                    <span>Clean Formulation Tolerance</span>
                    <span>94%</span>
                  </div>
                  <div className="h-1.5 w-full bg-neutral-cream-200 dark:bg-neutral-obsidian-800 rounded-full overflow-hidden">
                    <div className="h-full w-[94%] bg-brand-gold-500 rounded-full" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-neutral-cream-600 dark:text-neutral-cream-400">
                    <span>Dermal Barrier Strength</span>
                    <span>78%</span>
                  </div>
                  <div className="h-1.5 w-full bg-neutral-cream-200 dark:bg-neutral-obsidian-800 rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-brand-blush-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-brand-gold-600 dark:text-brand-gold-400 font-serif">
              Digital Identity
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-neutral-obsidian-950 dark:text-neutral-cream-50">
              Cosmetic Passport
            </h2>
            <p className="text-sm md:text-base text-neutral-cream-700 dark:text-neutral-cream-300 font-sans leading-relaxed">
              Consolidate your beauty preferences, skin mapping indicators, and shade matches into a clean digital passport. Take your profile anywhere to discover compatible skincare regimens.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-cream-200 dark:bg-neutral-obsidian-900 border border-neutral-cream-300 dark:border-neutral-obsidian-800 rounded-full text-xs font-medium text-neutral-cream-600 dark:text-neutral-cream-400">
                <span>Verification Status:</span>
                <span className="text-brand-gold-600 dark:text-brand-gold-400 font-semibold font-mono uppercase">Validated</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PassportPreview;
