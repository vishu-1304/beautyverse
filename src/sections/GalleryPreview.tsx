import React from 'react';
import Container from '../components/ui/Container';

export const GalleryPreview: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-neutral-cream-50 dark:bg-neutral-obsidian-900 border-b border-neutral-cream-200 dark:border-neutral-obsidian-900">
      <Container size="xl" padding="airy">
        <div className="space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-brand-blush-600 dark:text-brand-blush-400 font-serif">
                Community Showcase
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-neutral-obsidian-950 dark:text-neutral-cream-50">
                Aesthetic Gallery
              </h2>
              <p className="text-sm md:text-base text-neutral-cream-700 dark:text-neutral-cream-300 font-sans max-w-xl">
                Explore curated looks from creators worldwide. Save styles directly to your Face Canvas studio to try them on instantly.
              </p>
            </div>
            <div className="shrink-0">
              <div className="px-5 py-2.5 bg-neutral-cream-100 dark:bg-neutral-obsidian-950 border border-neutral-cream-300 dark:border-neutral-obsidian-850 rounded-full text-xs font-semibold text-neutral-cream-600 dark:text-neutral-cream-400 tracking-wider uppercase">
                Explore Full Gallery
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Sunset Velvet Blush',
                author: '@aurelia_styles',
                tags: ['Warm Matte', 'editorial']
              },
              {
                title: 'Alabaster Glass Shimmer',
                author: '@dior_dreamer',
                tags: ['High Gloss', 'minimalist']
              },
              {
                title: 'Satin Rosewood Editorial',
                author: '@rare_canvas',
                tags: ['Satin finish', 'classic']
              }
            ].map((look, idx) => (
              <div 
                key={idx} 
                className="bg-neutral-cream-100 dark:bg-neutral-obsidian-950 border border-neutral-cream-200 dark:border-neutral-obsidian-850 rounded-xl overflow-hidden shadow-luxury-sm flex flex-col justify-between p-6 h-72"
              >
                {/* Look Visual Placeholder */}
                <div className="h-32 w-full bg-neutral-cream-200 dark:bg-neutral-obsidian-900 border border-dashed border-neutral-cream-350 dark:border-neutral-obsidian-800 rounded-lg flex items-center justify-center text-[10px] text-neutral-cream-400 dark:text-neutral-cream-500 font-mono tracking-widest">
                  [ Visual Asset Placeholder ]
                </div>

                {/* Details */}
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-neutral-cream-500">{look.author}</span>
                    <div className="flex gap-1.5">
                      {look.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[9px] px-2 py-0.5 bg-neutral-cream-200 dark:bg-neutral-obsidian-800 rounded-full text-neutral-cream-600 dark:text-neutral-cream-400 font-sans">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-base font-serif font-medium text-neutral-obsidian-950 dark:text-neutral-cream-100">
                    {look.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GalleryPreview;
