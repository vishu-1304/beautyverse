import React from 'react';
import Container from '../components/ui/Container';

export const BeautyJourney: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-neutral-cream-50 dark:bg-neutral-obsidian-900 border-b border-neutral-cream-200 dark:border-neutral-obsidian-900">
      <Container size="xl" padding="airy">
        <div className="space-y-12">
          {/* Header */}
          <div className="max-w-2xl text-left space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-brand-blush-600 dark:text-brand-blush-400 font-serif">
              Step-by-Step Experience
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-neutral-obsidian-950 dark:text-neutral-cream-50">
              Your Beauty Journey
            </h2>
            <p className="text-sm md:text-base text-neutral-cream-600 dark:text-neutral-cream-400 font-sans max-w-xl">
              An personalized path curated for you. Take the quiz, analyze your profile, review bespoke product recommendation maps, and unlock your digital canvas.
            </p>
          </div>

          {/* Journey Steps Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Aesthetic Quiz',
                desc: 'Answer intuitive questions regarding skin health, product preferences, and personal style aspirations.'
              },
              {
                step: '02',
                title: 'AI Analysis',
                desc: 'Receive a full dermal tone mapping and micro-anatomical assessment powered by safe computer vision.'
              },
              {
                step: '03',
                title: 'Bespoke Passport',
                desc: 'Acquire your unique Beauty Passport, detailing custom shade recommendations and product ingredient fits.'
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group p-6 border border-neutral-cream-200 dark:border-neutral-obsidian-800 bg-neutral-cream-100 dark:bg-neutral-obsidian-950 rounded-xl space-y-4"
              >
                <div className="text-3xl font-serif italic text-brand-gold-500/50">
                  {item.step}
                </div>
                <h3 className="text-lg font-serif font-medium text-neutral-obsidian-950 dark:text-neutral-cream-100">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-neutral-cream-600 dark:text-neutral-cream-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BeautyJourney;
