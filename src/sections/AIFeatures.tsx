import React from 'react';
import Container from '../components/ui/Container';

export const AIFeatures: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-neutral-cream-100 dark:bg-neutral-obsidian-950 text-neutral-obsidian-900 dark:text-neutral-cream-100 border-b border-neutral-cream-200 dark:border-neutral-obsidian-900">
      <Container size="xl" padding="airy">
        <div className="space-y-12">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-brand-gold-600 dark:text-brand-gold-400 font-serif">
              Intelligent Precision
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-neutral-obsidian-950 dark:text-neutral-cream-50">
              Advanced AI Diagnostics
            </h2>
            <p className="text-sm md:text-base text-neutral-cream-700 dark:text-neutral-cream-300 font-sans max-w-xl mx-auto">
              Our clinical machine learning models map dermal attributes with microscopic precision, suggesting clean ingredients that match your biological profile.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Tone Spectrometry',
                desc: 'Detects microscopic skin tone variance to output perfect foundation shade coordinates.'
              },
              {
                title: 'Topology Mapping',
                desc: 'Identifies bone structure, face shapes, and feature locations for smart makeup placement.'
              },
              {
                title: 'Ingredient Matcher',
                desc: 'Cross-checks skin sensitivities against active cosmetic ingredients to block allergens.'
              },
              {
                title: 'Simulated Agility',
                desc: 'Calculates light refraction patterns for realistic digital pigment rendering.'
              }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="p-6 bg-neutral-cream-50 dark:bg-neutral-obsidian-900 border border-neutral-cream-200 dark:border-neutral-obsidian-800 rounded-lg space-y-3"
              >
                <div className="w-10 h-10 bg-brand-gold-100 dark:bg-brand-gold-900/30 text-brand-gold-700 dark:text-brand-gold-400 rounded-md flex items-center justify-center font-serif text-lg font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-base font-serif font-semibold text-neutral-obsidian-950 dark:text-neutral-cream-50">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-neutral-cream-600 dark:text-neutral-cream-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AIFeatures;
