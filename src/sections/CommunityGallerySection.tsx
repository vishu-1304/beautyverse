import React, { useState } from 'react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

// Interface for gallery items
interface GalleryItem {
  id: string;
  title: string;
  user: string;
  avatar: string;
  likes: number;
  rating: number;
  matchScore: number;
  tags: ('Natural' | 'Glam' | 'Bridal' | 'Party' | 'Editorial')[];
  gradient: string;
  description: string;
  products: {
    lipstick: string;
    eyeshadow: string;
    blush: string;
    eyeliner: string;
    foundation: string;
  };
}

// Static mock items for the beauty gallery
const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Celestial Rosewood',
    user: '@clara_chloe',
    avatar: 'CC',
    likes: 1240,
    rating: 4.8,
    matchScore: 98,
    tags: ['Glam', 'Natural'],
    gradient: 'from-brand-blush-900/60 via-neutral-obsidian-900 to-brand-gold-900/40',
    description: 'A delicate dusty rose satin finish with gold shimmer eyes.',
    products: {
      lipstick: 'Luminous Satin - Dusty Rose',
      eyeshadow: 'Desert Quartz Satin Duo',
      blush: 'Rose Petal Velvet Blush',
      eyeliner: 'Charcoal Wing Pencil',
      foundation: 'Warm Ivory Satin Foundation'
    }
  },
  {
    id: 'g2',
    title: 'Obsidian Editorial Wing',
    user: '@marcus_makeup',
    avatar: 'MM',
    likes: 890,
    rating: 4.9,
    matchScore: 94,
    tags: ['Editorial', 'Glam'],
    gradient: 'from-neutral-obsidian-900 via-neutral-obsidian-850 to-brand-gold-900/60',
    description: 'Sharp, high-impact matte black wings with neutral satin skin.',
    products: {
      lipstick: 'Nude Velvet Matte Lipstick',
      eyeshadow: 'Smokey Charcoal Matte Palette',
      blush: 'Golden Hour Bronzing Blush',
      eyeliner: 'Classic Obsidian Liquid Eyeliner',
      foundation: 'Honey Sable Matte Foundation'
    }
  },
  {
    id: 'g3',
    title: 'Golden Hour Shimmer',
    user: '@selena_v',
    avatar: 'SV',
    likes: 2150,
    rating: 5.0,
    matchScore: 97,
    tags: ['Glam', 'Natural', 'Party'],
    gradient: 'from-brand-gold-900/60 via-neutral-obsidian-900 to-brand-blush-900/40',
    description: 'Metallic copper eyes, peachy blush, and high-gloss coral lips.',
    products: {
      lipstick: 'Satin Coral Luminous Gloss',
      eyeshadow: 'Sunset Gold Metallic Eyeshadow',
      blush: 'Peach Flush Dewy Balm',
      eyeliner: 'Metallic Bronze Shimmer Line',
      foundation: 'Porcelain Dewy Glow Foundation'
    }
  },
  {
    id: 'g4',
    title: 'Ethereal Bridal Velvet',
    user: '@sophia_bride',
    avatar: 'SB',
    likes: 1670,
    rating: 4.9,
    matchScore: 96,
    tags: ['Bridal', 'Natural'],
    gradient: 'from-brand-blush-900/40 via-neutral-obsidian-900 to-brand-gold-900/30',
    description: 'Warm matte complexion with soft rosewood lips and nude velvet eyes.',
    products: {
      lipstick: 'Dusty Rose Velvet Matte',
      eyeshadow: 'Desert Quartz Satin Duo',
      blush: 'Rose Petal Soft Cream Blush',
      eyeliner: 'Charcoal Wing Pencil',
      foundation: 'Warm Ivory Liquid Base'
    }
  },
  {
    id: 'g5',
    title: 'Amethyst Party Glow',
    user: '@party_aesthetic',
    avatar: 'PA',
    likes: 1420,
    rating: 4.7,
    matchScore: 91,
    tags: ['Party', 'Glam', 'Editorial'],
    gradient: 'from-purple-950/50 via-neutral-obsidian-900 to-brand-blush-900/50',
    description: 'Royal amethyst purple glitter eyes and high-gloss transparent lips.',
    products: {
      lipstick: 'Plum Royale Bold Lipstick',
      eyeshadow: 'Amethyst Glow Glitter Palette',
      blush: 'Berry Bloom Satin Blush',
      eyeliner: 'Classic Obsidian Liquid Eyeliner',
      foundation: 'Golden Beige Satin Foundation'
    }
  },
  {
    id: 'g6',
    title: 'Minimalist Satin Nude',
    user: '@nude_canvas',
    avatar: 'NC',
    likes: 1020,
    rating: 4.8,
    matchScore: 99,
    tags: ['Natural', 'Editorial'],
    gradient: 'from-neutral-cream-900/40 via-neutral-obsidian-900 to-neutral-cream-800/40',
    description: 'Bare skin look with warm honey sable foundations and velvet nude lipstick.',
    products: {
      lipstick: 'Nude Velvet Matte Lipstick',
      eyeshadow: 'Desert Quartz Soft Shimmer',
      blush: 'Golden Hour Dewy Highlighter',
      eyeliner: 'Charcoal Wing Soft Line',
      foundation: 'Honey Sable Dewy Foundation'
    }
  }
];

export const CommunityGallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});
  const [selectedLook, setSelectedLook] = useState<GalleryItem | null>(null);

  // Toggle like status for items
  const handleToggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filter logic
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.tags.includes(activeFilter as any);
  });

  return (
    <section className="relative w-full overflow-hidden bg-neutral-obsidian-950 text-white py-24 md:py-32 border-b border-white/5">
      {/* Decorative Atmospheric Radial Blurs */}
      <div className="absolute top-1/3 right-1/10 w-[45vw] h-[45vw] max-w-[500px] rounded-full bg-brand-gold-900/10 blur-[130px] pointer-events-none select-none" />
      <div className="absolute bottom-1/3 left-1/10 w-[35vw] h-[35vw] max-w-[400px] rounded-full bg-brand-blush-900/10 blur-[120px] pointer-events-none select-none" />

      {/* Scoped CSS animations for custom entry or interactions */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes modal-scale {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-modal {
          animation: modal-scale 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes modal-fade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-overlay {
          animation: modal-fade 0.25s linear forwards;
        }
      `}} />

      <Container size="xl" padding="airy" className="relative z-10">
        
        {/* Top Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium bg-white/5 border border-white/10 text-brand-gold-400 shadow-luxury-sm select-none">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 8v4M12 16h.01" />
            </svg>
            Beauty Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-white leading-tight">
            Community Gallery
          </h2>
          <p className="text-sm md:text-base text-neutral-cream-300/80 leading-relaxed font-sans max-w-xl mx-auto">
            Discover AI-generated and community-inspired beauty looks.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16 max-w-2xl mx-auto">
          {['All', 'Natural', 'Glam', 'Bridal', 'Editorial'].map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-xs tracking-wider uppercase font-medium border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-brand-gold-500/10 border-brand-gold-400 text-brand-gold-300 shadow-luxury-glow'
                    : 'bg-white/2 border-white/5 hover:bg-white/5 hover:border-white/10 text-neutral-cream-300'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Responsive Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredItems.map((item) => {
            const isLiked = likedItems[item.id] || false;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedLook(item)}
                className="group relative flex flex-col justify-between bg-neutral-obsidian-900/50 border border-white/5 rounded-2xl p-5 overflow-hidden transition-all duration-500 hover:scale-[1.025] hover:shadow-luxury-glow hover:border-brand-gold-500/20 cursor-pointer"
              >
                
                {/* Large Image/Gradient Visual Placeholder */}
                <div className={`relative aspect-[4/3] w-full rounded-xl bg-gradient-to-tr ${item.gradient} border border-white/5 overflow-hidden flex items-center justify-center`}>
                  {/* Glass Card Overlay for Premium Visual Asset effect */}
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-[0.5px] transition-all duration-500 group-hover:scale-105" />
                  
                  {/* Decorative abstract beauty line art SVG inside image */}
                  <svg className="w-1/2 h-1/2 text-white/5 transition-all duration-500 group-hover:scale-110 group-hover:text-white/10" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M20 50 Q50 20 80 50 Q50 80 20 50" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.5" />
                  </svg>

                  {/* AI Match Score Badge (glowing overlay) */}
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="text-[10px] font-mono font-medium tracking-wide uppercase px-2.5 py-1 rounded bg-brand-gold-950/85 border border-brand-gold-500/30 text-brand-gold-300 shadow-luxury-glow flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-400 animate-pulse" />
                      {item.matchScore}% Match
                    </span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="mt-5 space-y-4">
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-cream-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Creator Row */}
                  <div className="flex justify-between items-start gap-4">
                    <div className="text-left space-y-0.5">
                      <h3 className="text-lg font-serif font-light text-white transition-all duration-300 group-hover:text-brand-gold-300">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        {/* User Avatar */}
                        <div className="w-5 h-5 rounded-full border border-white/20 bg-neutral-obsidian-950 flex items-center justify-center text-[9px] font-mono text-brand-gold-300 font-bold shrink-0">
                          {item.avatar}
                        </div>
                        <span className="text-[10px] font-mono text-neutral-cream-400">
                          {item.user}
                        </span>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1 bg-white/3 border border-white/5 rounded px-1.5 py-0.5 shrink-0">
                      <svg className="w-2.5 h-2.5 text-brand-gold-400 fill-brand-gold-400" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                      <span className="text-[10px] font-mono text-brand-gold-300 font-semibold leading-none">
                        {item.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    {/* Interactive Like Counter */}
                    <button
                      onClick={(e) => handleToggleLike(item.id, e)}
                      className="flex items-center gap-2 group/btn cursor-pointer"
                    >
                      <svg
                        className={`w-4 h-4 transition-all duration-300 ${
                          isLiked
                            ? 'text-red-500 fill-red-500 scale-110 drop-shadow-[0_0_6px_rgba(239,68,68,0.5)]'
                            : 'text-neutral-cream-400 group-hover/btn:text-red-400 group-hover/btn:scale-105'
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                      <span className="text-[10px] font-mono text-neutral-cream-400 leading-none">
                        {isLiked ? item.likes + 1 : item.likes}
                      </span>
                    </button>

                    {/* View Look Button */}
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-brand-gold-300 group-hover:text-brand-gold-200 transition-colors">
                      View Look
                      <svg className="w-3 h-3 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Overlay Modal (when a user clicks View Look) */}
        {selectedLook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-overlay">
            <div
              className="relative w-full max-w-lg bg-neutral-obsidian-900 border border-brand-gold-500/30 rounded-2xl p-6 sm:p-8 shadow-luxury-glow flex flex-col space-y-6 animate-modal text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedLook(null)}
                className="absolute top-4 right-4 p-2 text-neutral-cream-400 hover:text-white rounded-full hover:bg-white/5 transition-all cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Look Header Info */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-tr ${selectedLook.gradient} border border-white/10 shrink-0 flex items-center justify-center`}>
                  <span className="text-xs font-mono font-bold text-white uppercase">{selectedLook.avatar}</span>
                </div>
                <div>
                  <h4 className="text-2xl font-serif font-light text-white">{selectedLook.title}</h4>
                  <p className="text-xs font-mono text-neutral-cream-400 mt-0.5">by {selectedLook.user}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-cream-300 leading-relaxed font-sans border-b border-white/5 pb-4">
                {selectedLook.description}
              </p>

              {/* Product recommendation breakdown */}
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-gold-300">
                  Recommended Products In Look
                </span>
                
                <div className="grid grid-cols-1 gap-2.5">
                  {[
                    { label: 'Foundation', product: selectedLook.products.foundation, color: 'bg-neutral-cream-300' },
                    { label: 'Eyeshadow', product: selectedLook.products.eyeshadow, color: 'bg-brand-gold-400' },
                    { label: 'Eyeliner', product: selectedLook.products.eyeliner, color: 'bg-neutral-obsidian-900' },
                    { label: 'Blush', product: selectedLook.products.blush, color: 'bg-brand-blush-400' },
                    { label: 'Lipstick', product: selectedLook.products.lipstick, color: 'bg-red-700' }
                  ].map((p, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 rounded-lg bg-white/2 border border-white/5">
                      <span className="text-xs text-neutral-cream-400 font-sans">{p.label}</span>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${p.color}`} />
                        <span className="text-xs font-medium text-white font-sans">{p.product}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions inside Overlay */}
              <div className="flex gap-4 pt-4">
                <Button
                  variant="shimmer"
                  intent="accent"
                  shape="sleek"
                  size="md"
                  className="flex-1 text-center"
                  onClick={() => {
                    setSelectedLook(null);
                    // Add micro-feedback logic or redirect simulation
                    const toast = document.createElement('div');
                    toast.className = "fixed bottom-6 right-6 z-50 bg-neutral-obsidian-900 border border-brand-gold-400/40 text-neutral-cream-100 px-6 py-3 rounded-lg shadow-luxury-glow flex items-center gap-3 animate-toast-in";
                    toast.innerHTML = `<span class="w-2 h-2 rounded-full bg-brand-gold-400 animate-ping"></span><span class="text-xs font-mono uppercase tracking-wider">Look Loaded in Studio!</span>`;
                    document.body.appendChild(toast);
                    setTimeout(() => toast.remove(), 4000);
                  }}
                >
                  Load Look into Studio
                </Button>
                <Button
                  variant="outline"
                  intent="neutral"
                  shape="sleek"
                  size="md"
                  className="px-6 text-white border-white/10 hover:bg-white/5"
                  onClick={() => setSelectedLook(null)}
                >
                  Close
                </Button>
              </div>

            </div>
          </div>
        )}

      </Container>
    </section>
  );
};

export default CommunityGallerySection;
