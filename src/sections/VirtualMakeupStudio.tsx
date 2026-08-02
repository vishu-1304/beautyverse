import React, { useState, useEffect } from 'react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Define structures for our shades
interface Shade {
  id: string;
  name: string;
  color: string; // Hex color code
  type: 'Matte' | 'Satin' | 'Glitter' | 'Metallic' | 'Dewy';
  description: string;
  price: string;
}

// Group shades by category
const MAKEUP_SHADES: Record<string, Shade[]> = {
  Lipstick: [
    { id: 'l1', name: 'Velvet Crimson', color: '#8C1B2F', type: 'Matte', description: 'Deep luxury crimson velvet finish', price: '$38' },
    { id: 'l2', name: 'Dusty Rose', color: '#D4A3A7', type: 'Satin', description: 'Soft romantic pinkish rosewood hue', price: '$36' },
    { id: 'l3', name: 'Satin Coral', color: '#E27D60', type: 'Satin', description: 'Bright, summery coral with silky texture', price: '$36' },
    { id: 'l4', name: 'Nude Velvet', color: '#C7B4A8', type: 'Matte', description: 'Perfect neutral nude for daily luxury', price: '$38' },
    { id: 'l5', name: 'Plum Royale', color: '#5C2038', type: 'Matte', description: 'Bold, dramatic dark plum statement', price: '$40' },
  ],
  Eyeshadow: [
    { id: 'e1', name: 'Sunset Gold', color: '#C29555', type: 'Metallic', description: 'Rich gold shimmer inspired by golden hour', price: '$32' },
    { id: 'e2', name: 'Amethyst Glow', color: '#7D628C', type: 'Glitter', description: 'Iridescent royal purple sparkle effect', price: '$34' },
    { id: 'e3', name: 'Desert Quartz', color: '#E5BFC2', type: 'Satin', description: 'Soft warm rose quartz base tone', price: '$30' },
    { id: 'e4', name: 'Smokey Charcoal', color: '#333333', type: 'Matte', description: 'Deep obsidian gray for dramatic eyes', price: '$32' },
  ],
  Blush: [
    { id: 'b1', name: 'Peach Flush', color: '#E8A89B', type: 'Dewy', description: 'Warm peach radiance for a youthful glow', price: '$34' },
    { id: 'b2', name: 'Rose Petal', color: '#D4A3A7', type: 'Matte', description: 'Classic romantic pink cheek flush', price: '$34' },
    { id: 'b3', name: 'Golden Hour', color: '#B3803E', type: 'Dewy', description: 'Sunkissed bronze highlighter-blush hybrid', price: '$36' },
    { id: 'b4', name: 'Berry Bloom', color: '#8C5156', type: 'Satin', description: 'Rich berry tone for a deep contour', price: '$36' },
  ],
  Eyeliner: [
    { id: 'ey1', name: 'Classic Obsidian', color: '#121212', type: 'Matte', description: 'Intense matte black for a sharp wing precision', price: '$28' },
    { id: 'ey2', name: 'Metallic Bronze', color: '#734D23', type: 'Metallic', description: 'Warm golden brown with subtle metallic glint', price: '$28' },
    { id: 'ey3', name: 'Emerald Ink', color: '#1E3E29', type: 'Satin', description: 'Deep forest green for editorial style', price: '$30' },
    { id: 'ey4', name: 'Charcoal Wing', color: '#4D4D4D', type: 'Matte', description: 'Soft carbon grey for a natural wing outline', price: '$28' },
  ],
  Foundation: [
    { id: 'f1', name: 'Porcelain', color: '#FAF8F5', type: 'Dewy', description: 'Ultra-light shade with cool neutral undertones', price: '$48' },
    { id: 'f2', name: 'Warm Ivory', color: '#F4EFEB', type: 'Satin', description: 'Light ivory with warm peach undertones', price: '$48' },
    { id: 'f3', name: 'Honey Sable', color: '#DACDC3', type: 'Dewy', description: 'Medium tone with golden olive undertones', price: '$48' },
    { id: 'f4', name: 'Golden Beige', color: '#C7B4A8', type: 'Satin', description: 'Warm golden beige with rich undertones', price: '$48' },
    { id: 'f5', name: 'Rich Espresso', color: '#4D3F37', type: 'Matte', description: 'Deep, rich dark chocolate brown undertones', price: '$48' },
  ]
};

// Curated Recommended Look (Golden Hour Glam)
const RECOMMENDED_LOOK = {
  name: 'Golden Hour Glam',
  skinTone: 'Warm Golden',
  faceShape: 'Oval Symmetrical',
  matchScore: 98,
  shades: {
    Lipstick: MAKEUP_SHADES.Lipstick[1], // Dusty Rose
    Eyeshadow: MAKEUP_SHADES.Eyeshadow[0], // Sunset Gold
    Blush: MAKEUP_SHADES.Blush[0], // Peach Flush
    Eyeliner: MAKEUP_SHADES.Eyeliner[0], // Classic Obsidian
    Foundation: MAKEUP_SHADES.Foundation[1] // Warm Ivory
  }
};

export const VirtualMakeupStudio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Lipstick');
  const [selectedShades, setSelectedShades] = useState<Record<string, Shade>>({
    Lipstick: MAKEUP_SHADES.Lipstick[3], // Default Nude Velvet
    Eyeshadow: MAKEUP_SHADES.Eyeshadow[2], // Default Desert Quartz
    Blush: MAKEUP_SHADES.Blush[1], // Default Rose Petal
    Eyeliner: MAKEUP_SHADES.Eyeliner[3], // Default Charcoal Wing
    Foundation: MAKEUP_SHADES.Foundation[2] // Default Honey Sable
  });

  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanPulse, setScanPulse] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Trigger initial scanning ring animation on component mount
  useEffect(() => {
    setIsScanning(true);
    const timeout = setTimeout(() => setIsScanning(false), 2500);
    return () => clearTimeout(timeout);
  }, []);

  const handleSelectShade = (category: string, shade: Shade) => {
    setSelectedShades((prev) => ({
      ...prev,
      [category]: shade
    }));
  };

  const handleApplyRecommendedLook = () => {
    setIsScanning(true);
    setScanPulse(true);
    
    // Apply recommended look shades
    setSelectedShades({ ...RECOMMENDED_LOOK.shades });

    setTimeout(() => {
      setIsScanning(false);
      setScanPulse(false);
      showToast('AI Look "Golden Hour Glam" applied successfully!');
    }, 2000);
  };

  const handleSaveLook = () => {
    showToast('Your custom beauty look has been saved to your profile!');
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <section className="relative w-full overflow-hidden bg-neutral-obsidian-950 text-white py-24 md:py-32 border-b border-white/5">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/10 w-[35vw] h-[35vw] max-w-[450px] rounded-full bg-brand-gold-900/10 blur-[120px] pointer-events-none select-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[40vw] h-[40vw] max-w-[550px] rounded-full bg-brand-blush-900/10 blur-[140px] pointer-events-none select-none" />

      {/* Embedded Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes sweep-down {
          0% { transform: translateY(-160px); opacity: 0; }
          15% { opacity: 0.8; }
          85% { opacity: 0.8; }
          100% { transform: translateY(160px); opacity: 0; }
        }
        .animate-sweep-down {
          animation: sweep-down 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes scan-glow {
          0%, 100% { opacity: 0.3; transform: scale(0.97); }
          50% { opacity: 0.7; transform: scale(1.03); }
        }
        .animate-scan-glow {
          animation: scan-glow 2.5s ease-in-out infinite;
        }
        @keyframes toast-slide-in {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-toast-in {
          animation: toast-slide-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      <Container size="xl" padding="airy" className="relative z-10">
        
        {/* Sleek Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-neutral-obsidian-900 border border-brand-gold-400/40 text-neutral-cream-100 px-6 py-3 rounded-lg shadow-luxury-glow flex items-center gap-3 animate-toast-in">
            <span className="w-2 h-2 rounded-full bg-brand-gold-400 animate-ping" />
            <span className="text-xs font-mono uppercase tracking-wider">{toastMessage}</span>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium bg-white/5 border border-white/10 text-brand-gold-400 shadow-luxury-sm select-none">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              <path d="M2 12h20" />
            </svg>
            Interactive Simulation
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-white leading-tight">
            Virtual Makeup Studio
          </h2>
          <p className="text-sm md:text-base text-neutral-cream-300/80 leading-relaxed font-sans max-w-xl mx-auto">
            Experiment with luxury shades, preview custom finishes, and apply AI-curated looks in real-time.
          </p>
        </div>

        {/* Three-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          
          {/* LEFT PANEL: Makeup Category & Swatches (3 Columns) */}
          <div className="lg:col-span-3 flex flex-col space-y-6 h-full justify-between">
            <div className="space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-brand-gold-300 border-b border-white/10 pb-2">
                Makeup categories
              </h3>
              
              {/* Category Selector Buttons */}
              <div className="grid grid-cols-5 lg:flex lg:flex-col gap-2">
                {Object.keys(MAKEUP_SHADES).map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`flex flex-col lg:flex-row items-center gap-2.5 px-3 py-3 rounded-lg border text-center lg:text-left transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-brand-blush-900/20 border-brand-blush-400/40 text-brand-blush-300 shadow-luxury-sm'
                          : 'bg-white/2 border-white/5 hover:bg-white/5 hover:border-white/10 text-neutral-cream-300'
                      }`}
                    >
                      {/* Custom SVGs for Categories */}
                      {cat === 'Lipstick' && (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 18h12v4H6zM9 10v8h6v-8zM10 2h4v8h-4z" />
                        </svg>
                      )}
                      {cat === 'Eyeshadow' && (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="3" />
                          <path d="M3 12h3M18 12h3M12 3v3M12 18v3" />
                        </svg>
                      )}
                      {cat === 'Blush' && (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="6" cy="12" r="3" />
                          <circle cx="18" cy="12" r="3" />
                        </svg>
                      )}
                      {cat === 'Eyeliner' && (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="m14 3 7 7-11 11H3v-7L14 3z" />
                        </svg>
                      )}
                      {cat === 'Foundation' && (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                      )}
                      <span className="text-[10px] sm:text-xs font-sans tracking-wide uppercase font-medium mt-1 lg:mt-0">
                        {cat}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Swatch Selector Grid */}
            <div className="bg-white/2 border border-white/5 rounded-xl p-4 sm:p-5 flex-grow lg:flex-grow-0 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-cream-400">
                  Select Shade
                </span>
                <span className="text-[10px] text-brand-gold-300 font-mono">
                  {MAKEUP_SHADES[activeCategory].length} Shades
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {MAKEUP_SHADES[activeCategory].map((shade) => {
                  const isSelected = selectedShades[activeCategory].id === shade.id;
                  return (
                    <button
                      key={shade.id}
                      onClick={() => handleSelectShade(activeCategory, shade)}
                      className={`flex items-center gap-2.5 p-2 rounded-lg border text-left transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'border-brand-gold-400 bg-white/5'
                          : 'border-white/5 bg-transparent hover:bg-white/2 hover:border-white/10'
                      }`}
                    >
                      <span
                        className="w-5 h-5 rounded-full border border-white/20 shrink-0 relative flex items-center justify-center shadow-inner"
                        style={{ backgroundColor: shade.color }}
                      >
                        {isSelected && (
                          <svg className="w-3 h-3 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        )}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[10px] font-medium text-white truncate leading-tight">
                          {shade.name}
                        </p>
                        <p className="text-[9px] text-neutral-cream-400 truncate">
                          {shade.type}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
              
              {/* Product Info Box */}
              <div className="border-t border-white/5 pt-3.5 text-left">
                <p className="text-[10px] font-mono text-brand-gold-300 uppercase tracking-widest leading-none">
                  {selectedShades[activeCategory].price} • {selectedShades[activeCategory].type} finish
                </p>
                <p className="text-[11px] text-neutral-cream-300 mt-1 leading-relaxed">
                  {selectedShades[activeCategory].description}
                </p>
              </div>
            </div>
          </div>

          {/* CENTER PANEL: Face Preview (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-[380px] lg:max-w-none relative aspect-[4/5] bg-neutral-obsidian-900 border border-brand-gold-500/20 rounded-2xl p-6 sm:p-8 shadow-luxury-glow overflow-hidden flex flex-col justify-between items-center">
              
              {/* Scan sweep overlay */}
              {isScanning && (
                <div className="absolute inset-x-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold-400 to-transparent animate-sweep-down pointer-events-none z-20" />
              )}
              
              {/* Top scanner text */}
              <div className="w-full flex justify-between items-center z-10">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isScanning ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-cream-400">
                    {isScanning ? 'Scanning Face Mesh...' : 'Live Preview Active'}
                  </span>
                </div>
                <span className="text-[9px] font-mono text-neutral-cream-500">
                  REF: BV-9844_AI
                </span>
              </div>

              {/* Dynamic Vector Face Canvas */}
              <div className="relative w-full flex-grow flex items-center justify-center py-6">
                
                {/* Glowing scan ring overlay */}
                <div className={`absolute w-[280px] h-[280px] rounded-full border border-brand-gold-400/25 pointer-events-none transition-all duration-1000 ${
                  isScanning ? 'animate-scan-glow scale-105 border-brand-gold-300/40 shadow-[0_0_30px_rgba(212,149,85,0.15)]' : 'opacity-20 scale-95'
                }`} />

                {/* Cyberpunk grid background watermark inside preview */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none opacity-40" />

                {/* SVG Face Container */}
                <svg
                  className="w-full h-full max-h-[300px] sm:max-h-[340px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-500"
                  viewBox="0 0 300 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Glow and Blur Filters for Makeup Layers */}
                    <filter id="eyeshadow-blur" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="8" />
                    </filter>
                    <filter id="blush-blur" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="16" />
                    </filter>
                    <linearGradient id="gloss-overlay" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="white" stopOpacity="0" />
                      <stop offset="50%" stopColor="white" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* 1. Foundation: Face Contour shape */}
                  <path
                    d="M150 60 C80 60 50 120 50 190 C50 280 100 340 150 340 C200 340 250 280 250 190 C250 120 220 60 150 60 Z"
                    fill={selectedShades.Foundation.color}
                    fillOpacity="0.25"
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="1.5"
                    className="transition-all duration-700"
                  />

                  {/* Aesthetic grid face mesh lines */}
                  <path d="M150 60 L150 340" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" strokeDasharray="3 3" />
                  <path d="M50 190 C100 210 200 210 250 190" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" strokeDasharray="3 3" />

                  {/* 2. Blush Layer */}
                  {/* Left cheek blush */}
                  <ellipse
                    cx="95"
                    cy="225"
                    rx="32"
                    ry="22"
                    fill={selectedShades.Blush.color}
                    opacity="0.35"
                    filter="url(#blush-blur)"
                    className="transition-all duration-700"
                  />
                  {/* Right cheek blush */}
                  <ellipse
                    cx="205"
                    cy="225"
                    rx="32"
                    ry="22"
                    fill={selectedShades.Blush.color}
                    opacity="0.35"
                    filter="url(#blush-blur)"
                    className="transition-all duration-700"
                  />

                  {/* 3. Eyeshadow Layer */}
                  {/* Left eyelid shadow */}
                  <path
                    d="M 85 156 Q 110 134 135 156 Q 110 148 85 156 Z"
                    fill={selectedShades.Eyeshadow.color}
                    opacity="0.65"
                    filter="url(#eyeshadow-blur)"
                    className="transition-all duration-700"
                  />
                  {/* Right eyelid shadow */}
                  <path
                    d="M 165 156 Q 190 134 215 156 Q 190 148 165 156 Z"
                    fill={selectedShades.Eyeshadow.color}
                    opacity="0.65"
                    filter="url(#eyeshadow-blur)"
                    className="transition-all duration-700"
                  />

                  {/* 4. Eyeliner Layer */}
                  {/* Left eyeliner path */}
                  <path
                    d="M 83 157 Q 107 144 133 156"
                    stroke={selectedShades.Eyeliner.color}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.85"
                    className="transition-all duration-700"
                  />
                  {/* Right eyeliner path */}
                  <path
                    d="M 167 156 Q 193 144 217 157"
                    stroke={selectedShades.Eyeliner.color}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.85"
                    className="transition-all duration-700"
                  />

                  {/* Standard Face Art Line Contours (Eyes, Eyebrows, Nose, Face Outlines) */}
                  {/* Eyebrows */}
                  <path d="M 82 142 Q 108 126 134 140" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M 166 140 Q 192 126 218 142" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" strokeLinecap="round" />

                  {/* Eye Shapes */}
                  {/* Left eye outline */}
                  <path d="M 88 158 Q 110 148 132 158 Q 110 166 88 158 Z" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
                  <circle cx="110" cy="158" r="4.5" fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
                  <circle cx="111" cy="157" r="1.5" fill="white" />

                  {/* Right eye outline */}
                  <path d="M 168 158 Q 190 148 212 158 Q 190 166 168 158 Z" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
                  <circle cx="190" cy="158" r="4.5" fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
                  <circle cx="191" cy="157" r="1.5" fill="white" />

                  {/* Nose Outline */}
                  <path d="M 144 185 L 150 185 L 150 236 Q 150 242 143 244" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.2" strokeLinecap="round" />

                  {/* 5. Lipstick Layer */}
                  {/* Lip shapes grouped for transition and fill */}
                  <g className="transition-all duration-700">
                    {/* Upper Lip */}
                    <path
                      d="M 116 276 Q 133 261 150 270 Q 167 261 184 276 Q 150 282 116 276 Z"
                      fill={selectedShades.Lipstick.color}
                      fillOpacity="0.85"
                      stroke={selectedShades.Lipstick.color}
                      strokeWidth="0.5"
                    />
                    {/* Lower Lip */}
                    <path
                      d="M 116 276 Q 150 299 184 276 Q 150 282 116 276 Z"
                      fill={selectedShades.Lipstick.color}
                      fillOpacity="0.85"
                      stroke={selectedShades.Lipstick.color}
                      strokeWidth="0.5"
                    />
                    {/* Lip Gloss Shine Overlay */}
                    <path
                      d="M 126 277 Q 150 291 174 277 Q 150 281 126 277 Z"
                      fill="url(#gloss-overlay)"
                      pointerEvents="none"
                    />
                  </g>
                </svg>
              </div>

              {/* Bottom control panel within the center box */}
              <div className="w-full border-t border-white/5 pt-4 flex justify-between items-center z-10">
                <span className="text-[10px] text-neutral-cream-400 font-sans tracking-wide leading-relaxed text-left">
                  Model: Digital Avatar
                  <br />
                  Mesh: 1,420 Vertices
                </span>
                <button
                  onClick={() => {
                    setIsScanning(true);
                    setTimeout(() => setIsScanning(false), 2000);
                    showToast('Biometric mesh re-aligned.');
                  }}
                  className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[9px] font-mono uppercase tracking-wider text-brand-gold-300 hover:bg-white/10 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  Re-align Mesh
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: AI Recommendation & Summary (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
            
            {/* AI Recommendation Card */}
            <Card
              variant="glass"
              bgIntensity="dark"
              shape="pill-box"
              padding="md"
              className="border-white/10 bg-neutral-obsidian-950/40 relative overflow-hidden flex flex-col h-full justify-between"
            >
              <div className="space-y-6">
                
                {/* Recommended Look Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-brand-gold-400 px-2 py-0.5 rounded bg-brand-gold-900/20 border border-brand-gold-500/20">
                      AI Best Match
                    </span>
                    <h4 className="text-xl font-serif font-light text-white mt-1">
                      {RECOMMENDED_LOOK.name}
                    </h4>
                  </div>
                  
                  {/* Match Score circular representation */}
                  <div className="relative flex items-center justify-center w-12 h-12">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-white/5"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-brand-gold-400"
                        strokeDasharray={`${RECOMMENDED_LOOK.matchScore}, 100`}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute text-[10px] font-mono font-medium text-brand-gold-300">
                      {RECOMMENDED_LOOK.matchScore}%
                    </div>
                  </div>
                </div>

                {/* Profile Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 border-y border-white/5 py-4">
                  <div className="text-left">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-cream-400 block">
                      Skin Tone
                    </span>
                    <span className="text-xs font-medium text-white font-sans mt-0.5 block">
                      {RECOMMENDED_LOOK.skinTone}
                    </span>
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-cream-400 block">
                      Face Shape
                    </span>
                    <span className="text-xs font-medium text-white font-sans mt-0.5 block">
                      {RECOMMENDED_LOOK.faceShape}
                    </span>
                  </div>
                </div>

                {/* Selected Products List */}
                <div className="space-y-3.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-cream-400 block text-left">
                    Active Studio Products
                  </span>
                  
                  <div className="space-y-2.5">
                    {Object.entries(selectedShades).map(([category, shade]) => (
                      <div
                        key={category}
                        className="flex items-center justify-between text-xs py-1 border-b border-white/2"
                      >
                        <span className="text-neutral-cream-400 font-sans">{category}</span>
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-white/10"
                            style={{ backgroundColor: shade.color }}
                          />
                          <span className="font-medium text-white font-sans">
                            {shade.name} <span className="text-[10px] text-neutral-cream-500 font-normal">({shade.type})</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action CTA Buttons */}
              <div className="flex flex-col gap-3 pt-6 mt-4">
                <Button
                  variant="shimmer"
                  intent="accent"
                  shape="sleek"
                  size="lg"
                  className="w-full text-center"
                  onClick={handleApplyRecommendedLook}
                  isLoading={scanPulse}
                >
                  Apply AI Recommended Look
                </Button>
                <Button
                  variant="outline"
                  intent="neutral"
                  shape="sleek"
                  size="md"
                  className="w-full text-center text-white border-white/10 hover:bg-white/5"
                  onClick={handleSaveLook}
                >
                  Save Current Look
                </Button>
              </div>
            </Card>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default VirtualMakeupStudio;
