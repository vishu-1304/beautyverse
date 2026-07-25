import React from 'react';
import Container from '../components/ui/Container';

export const FaceCanvasPreview: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-neutral-cream-50 dark:bg-neutral-obsidian-900 border-b border-neutral-cream-200 dark:border-neutral-obsidian-900">
      <Container size="xl" padding="airy">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-brand-blush-600 dark:text-brand-blush-400 font-serif">
              Creative Sandbox
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-neutral-obsidian-950 dark:text-neutral-cream-50">
              Interactive Face Canvas
            </h2>
            <p className="text-sm md:text-base text-neutral-cream-700 dark:text-neutral-cream-300 font-sans leading-relaxed">
              Experience products in real-time on our highly responsive virtual face canvas. Adjust opacity, pigment shine, and blending techniques to preview finishes on your exact face scan.
            </p>
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3 text-xs text-neutral-cream-600 dark:text-neutral-cream-400">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-500" />
                Real-Time 3D Face Mesh Mapping
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-cream-600 dark:text-neutral-cream-400">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-500" />
                Matte, Satin, and Glitter Shimmer Controls
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-cream-600 dark:text-neutral-cream-400">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-500" />
                One-Click Professional Palette Loadouts
              </div>
            </div>
          </div>

          {/* Interactive UI Sandbox Skeleton */}
          <div className="lg:col-span-7 bg-neutral-cream-100 dark:bg-neutral-obsidian-950 border border-neutral-cream-200 dark:border-neutral-obsidian-850 rounded-xl overflow-hidden shadow-luxury-md p-6 sm:p-8 space-y-6">
            {/* Viewport Frame */}
            <div className="aspect-[16/9] w-full bg-neutral-cream-200 dark:bg-neutral-obsidian-900 border border-dashed border-neutral-cream-300 dark:border-neutral-obsidian-800 rounded-lg flex flex-col items-center justify-center text-center p-4">
              <span className="text-xs uppercase tracking-widest text-neutral-cream-500 font-mono">
                [ Virtual Face Canvas Studio Frame ]
              </span>
              <span className="text-[10px] text-neutral-cream-400 dark:text-neutral-cream-500 mt-2">
                No active camera / feed is loaded in this skeleton
              </span>
            </div>

            {/* Slider Mock Controls */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="h-3 w-20 bg-neutral-cream-200 dark:bg-neutral-obsidian-800 rounded" />
                <div className="h-2 w-full bg-neutral-cream-300 dark:bg-neutral-obsidian-800 rounded" />
              </div>
              <div className="space-y-2">
                <div className="h-3 w-16 bg-neutral-cream-200 dark:bg-neutral-obsidian-800 rounded" />
                <div className="h-2 w-full bg-neutral-cream-300 dark:bg-neutral-obsidian-800 rounded" />
              </div>
              <div className="space-y-2">
                <div className="h-3 w-24 bg-neutral-cream-200 dark:bg-neutral-obsidian-800 rounded" />
                <div className="h-2 w-full bg-neutral-cream-300 dark:bg-neutral-obsidian-800 rounded" />
              </div>
              <div className="space-y-2">
                <div className="h-3 w-12 bg-neutral-cream-200 dark:bg-neutral-obsidian-800 rounded" />
                <div className="h-2 w-full bg-neutral-cream-300 dark:bg-neutral-obsidian-800 rounded" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FaceCanvasPreview;
