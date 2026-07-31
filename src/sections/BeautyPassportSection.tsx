import React, { useState } from 'react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export const BeautyPassportSection: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [notification, setNotification] = useState<string | null>(null);

  const handleDownload = () => {
    if (isDownloading) return;
    setIsDownloading(true);
    setDownloadProgress(0);
    setNotification('Analyzing attributes and generating passport...');

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDownloading(false);
            setNotification('Beauty Passport downloaded successfully!');
            setTimeout(() => setNotification(null), 4000);
          }, 600);
          return 100;
        }
        return prev + 20;
      });
    }, 250);
  };

  return (
    <section className="relative w-full overflow-hidden bg-neutral-obsidian-950 text-white py-24 md:py-32 border-b border-white/5">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[500px] rounded-full bg-brand-gold-900/10 blur-[130px] pointer-events-none select-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[45vw] h-[45vw] max-w-[600px] rounded-full bg-brand-blush-900/10 blur-[150px] pointer-events-none select-none" />
      
      {/* Ambient scanning lines animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes subtle-scan {
          0%, 100% { transform: translateY(0); opacity: 0.1; }
          50% { transform: translateY(280px); opacity: 0.4; }
        }
        .animate-subtle-scan {
          animation: subtle-scan 4s ease-in-out infinite;
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.6; }
          100% { transform: scale(0.95); opacity: 0.3; }
        }
        .animate-pulse-ring {
          animation: pulse-ring 3s ease-in-out infinite;
        }
      `}} />

      <Container size="xl" padding="airy" className="relative z-10">
        
        {/* Toast Notification */}
        {notification && (
          <div className="fixed bottom-6 right-6 z-50 bg-neutral-obsidian-900 border border-brand-gold-400/40 text-neutral-cream-100 px-6 py-3 rounded-lg shadow-luxury-glow flex items-center gap-3 animate-fade-in transition-all duration-300">
            <span className="w-2 h-2 rounded-full bg-brand-gold-400 animate-ping" />
            <span className="text-xs font-mono uppercase tracking-wider">{notification}</span>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium bg-white/5 border border-white/10 text-brand-gold-400 shadow-luxury-sm select-none">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Biometric Credential
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-white leading-tight">
            Your AI Beauty Passport
          </h2>
          <p className="text-sm md:text-base text-neutral-cream-300/80 leading-relaxed font-sans max-w-xl mx-auto">
            Your personalized beauty identity generated using AI analysis.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
          
          {/* LEFT SIDE: Premium Passport Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="w-full relative bg-neutral-obsidian-900 border border-brand-gold-500/20 rounded-2xl p-6 sm:p-8 shadow-luxury-glow overflow-hidden flex flex-col justify-between h-full min-h-[460px]">
              
              {/* Dynamic Scanning Line Overlay */}
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-brand-gold-400 to-transparent animate-subtle-scan pointer-events-none" />

              {/* Card Watermark */}
              <div className="absolute right-[-30px] bottom-[-30px] w-48 h-48 rounded-full border border-brand-gold-500/5 pointer-events-none" />

              {/* Passport Header */}
              <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-6">
                <div>
                  <h4 className="text-sm font-serif font-semibold tracking-wider text-brand-gold-100 uppercase">
                    Beauty Passport
                  </h4>
                  <p className="text-[9px] text-brand-gold-400/80 uppercase tracking-widest font-mono">
                    ID: BV-77409-C
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand-gold-500/10 border border-brand-gold-400/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-400 animate-pulse" />
                  <span className="text-[8px] text-brand-gold-300 uppercase tracking-widest font-mono font-semibold">
                    Verified
                  </span>
                </div>
              </div>

              {/* Avatar & Core Metadata Row */}
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6">
                {/* User Avatar Placeholder */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-brand-gold-500 to-brand-blush-500 opacity-70 blur-[1px] animate-pulse-ring" />
                  <div className="relative w-28 h-28 rounded-full bg-neutral-obsidian-950 flex items-center justify-center overflow-hidden border border-white/15">
                    {/* Abstract Facial Mapping SVG */}
                    <svg className="w-20 h-20 text-brand-gold-300/40" viewBox="0 0 100 100" fill="none">
                      {/* Outer Head Oval */}
                      <path d="M50 15 C30 15, 25 35, 25 55 C25 75, 35 85, 50 85 C65 85, 75 75, 75 55 C75 35, 70 15, 50 15 Z" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
                      {/* Symmetric grid mapping curves */}
                      <path d="M25 55 Q50 65 75 55" stroke="currentColor" strokeWidth="0.75" />
                      <path d="M30 42 Q50 48 70 42" stroke="currentColor" strokeWidth="0.75" />
                      <path d="M50 15 V85" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3,3" />
                      {/* Eye crosshairs */}
                      <circle cx="40" cy="45" r="2" fill="currentColor" className="text-brand-gold-400" />
                      <circle cx="60" cy="45" r="2" fill="currentColor" className="text-brand-gold-400" />
                      <circle cx="40" cy="45" r="5" stroke="currentColor" strokeWidth="0.5" />
                      <circle cx="60" cy="45" r="5" stroke="currentColor" strokeWidth="0.5" />
                      {/* Lip target */}
                      <path d="M44 65 Q50 69 56 65" stroke="currentColor" strokeWidth="1" />
                      <path d="M46 65 Q50 62 54 65" stroke="currentColor" strokeWidth="0.5" />
                      {/* Forehead landmark dot */}
                      <circle cx="50" cy="30" r="1.5" fill="currentColor" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-obsidian-950/80 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Identity Info */}
                <div className="flex-1 space-y-3 text-center sm:text-left">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-neutral-cream-400 block font-mono">
                      Passport Holder
                    </span>
                    <h3 className="text-xl font-serif text-white font-medium">
                      Sophia Laurent
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[9px] font-mono text-neutral-cream-300 uppercase">
                    <span>Algorithm:</span>
                    <span className="text-brand-gold-400 font-bold">BV-Neural v4.2</span>
                  </div>
                </div>
              </div>

              {/* Dermal Attributes List */}
              <div className="grid grid-cols-3 gap-3 border-t border-white/5 pt-5 text-left font-mono">
                <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5 space-y-1">
                  <span className="text-[8px] text-neutral-cream-400 uppercase block tracking-wider">Face Shape</span>
                  <p className="text-[11px] text-white font-semibold truncate">Oval</p>
                </div>
                <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5 space-y-1">
                  <span className="text-[8px] text-neutral-cream-400 uppercase block tracking-wider">Skin Tone</span>
                  <p className="text-[11px] text-white font-semibold truncate">Warm Alabaster</p>
                </div>
                <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5 space-y-1">
                  <span className="text-[8px] text-neutral-cream-400 uppercase block tracking-wider">Skin Type</span>
                  <p className="text-[11px] text-white font-semibold truncate">Dry / Combo</p>
                </div>
              </div>

              {/* Beauty Score Gauge */}
              <div className="border-t border-white/5 pt-5 mt-5 space-y-2">
                <div className="flex justify-between items-end font-mono">
                  <div>
                    <span className="text-[8px] text-neutral-cream-400 uppercase block tracking-wider mb-0.5">
                      Dermal Health Rating
                    </span>
                    <span className="text-xs text-brand-gold-300 font-semibold uppercase">
                      Excellence Level
                    </span>
                  </div>
                  <span className="text-2xl font-serif text-brand-gold-400 font-bold tracking-tight">
                    95%
                  </span>
                </div>
                <div className="h-2 w-full bg-neutral-obsidian-950 rounded-full overflow-hidden border border-white/5 p-0.5">
                  <div 
                    className="h-full bg-gradient-to-r from-brand-gold-600 via-brand-gold-400 to-brand-gold-500 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: '95%' }}
                  />
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: Skincare Routines */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Morning Routine Card */}
            <Card 
              bgIntensity="dark" 
              variant="bordered" 
              shape="pill-box" 
              hoverEffect="glow"
              className="bg-neutral-obsidian-900 border-white/10 p-6 flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 pb-4 border-b border-white/5 mb-5">
                  <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="5" />
                      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-medium text-white">Morning Routine</h3>
                    <p className="text-[10px] text-neutral-cream-400 uppercase tracking-widest font-mono">Energize & Protect</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { step: '01', role: 'Cleanser', name: 'Phyto-Active Purifying Wash', desc: 'Mild formulation to remove night secretions without lipid breakdown.' },
                    { step: '02', role: 'Serum', name: 'Vitamin C Radiance Infusion', desc: 'Powerful antioxidant layer to combat environmental oxidative stress.' },
                    { step: '03', role: 'Moisturizer', name: 'Hydro-Peptide Skin Emulsion', desc: 'Locks in lightweight moisture reserves, preparing skin texture for makeup.' },
                    { step: '04', role: 'Sunscreen', name: 'SPF 50 Broad-Spectrum Shield', desc: 'Physical block preserving dermal barriers from UV-induced aging.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3 bg-white/[0.02] border border-white/5 rounded-xl p-3.5 hover:bg-white/[0.04] transition-colors duration-300">
                      <span className="text-xs font-mono font-bold text-brand-gold-400/80">{item.step}</span>
                      <div className="space-y-0.5">
                        <h4 className="text-xs font-bold text-white font-mono tracking-wide">{item.role}</h4>
                        <p className="text-xs text-brand-gold-200 font-serif italic">{item.name}</p>
                        <p className="text-[10px] text-neutral-cream-400 leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Night Routine Card */}
            <Card 
              bgIntensity="dark" 
              variant="bordered" 
              shape="pill-box" 
              hoverEffect="glow"
              className="bg-neutral-obsidian-900 border-white/10 p-6 flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 pb-4 border-b border-white/5 mb-5">
                  <div className="w-9 h-9 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-medium text-white">Night Routine</h3>
                    <p className="text-[10px] text-neutral-cream-400 uppercase tracking-widest font-mono">Recover & Reconstruct</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { step: '01', role: 'Cleanser', name: 'Ceramide Melting Balm', desc: 'Lipid-rich oil cleanser to melt makeup and impurities.' },
                    { step: '02', role: 'Retinol', name: '0.5% Cellular Retinol Serum', desc: 'Boosts cell turnover to rebuild outer skin layers.' },
                    { step: '03', role: 'Moisturizer', name: 'Deep Recovery Barrier Cream', desc: 'Thick peptide shield to heal dermal matrix during sleep.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3 bg-white/[0.02] border border-white/5 rounded-xl p-3.5 hover:bg-white/[0.04] transition-colors duration-300">
                      <span className="text-xs font-mono font-bold text-brand-gold-400/80">{item.step}</span>
                      <div className="space-y-0.5">
                        <h4 className="text-xs font-bold text-white font-mono tracking-wide">{item.role}</h4>
                        <p className="text-xs text-brand-gold-200 font-serif italic">{item.name}</p>
                        <p className="text-[10px] text-neutral-cream-400 leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

          </div>
        </div>

        {/* BOTTOM: Recommended Makeup Palette Card */}
        <div className="max-w-6xl mx-auto mt-10">
          <Card 
            bgIntensity="dark" 
            variant="bordered" 
            shape="pill-box" 
            hoverEffect="glow"
            className="bg-neutral-obsidian-900 border-white/10 p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-5 mb-8 gap-4">
              <div>
                <h3 className="text-xl font-serif font-medium text-white">Recommended Makeup Palette</h3>
                <p className="text-xs text-neutral-cream-400 max-w-xl mt-1">
                  Biometrically balanced pigments curated to align with your microtone spectrometry and warm undertone index.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-gold-400" />
                <span className="text-[10px] uppercase font-mono tracking-wider text-brand-gold-300">Color Spectrum Approved</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { type: 'Foundation', shade: 'Warm Alabaster', hex: '#FAF7F2', textTheme: 'text-neutral-obsidian-900', desc: 'Dior-matched light satin glow skin finish.' },
                { type: 'Lipstick', shade: 'Dusty Rosewood', hex: '#C2878C', textTheme: 'text-white', desc: 'Merit-matched soft pigment velvet formulation.' },
                { type: 'Blush', shade: 'Soft Terracotta', hex: '#E5BFC2', textTheme: 'text-neutral-obsidian-900', desc: 'Rare Beauty cream dewy blush texture.' },
                { type: 'Eyeshadow', shade: 'Golden Bronze', hex: '#D3B381', textTheme: 'text-neutral-obsidian-900', desc: 'Hourglass metallic high-refraction shadow.' }
              ].map((pallet, idx) => (
                <div key={idx} className="group flex flex-col items-center text-center space-y-4">
                  {/* Luxury cosmetic pan representation */}
                  <div className="relative w-28 h-28 rounded-full bg-neutral-obsidian-950 p-2 border border-white/10 group-hover:border-brand-gold-500/30 transition-all duration-300 shadow-inner flex items-center justify-center">
                    <div 
                      className="w-full h-full rounded-full transition-transform duration-500 ease-out group-hover:scale-[1.05] relative shadow-luxury-md flex items-center justify-center overflow-hidden"
                      style={{ backgroundColor: pallet.hex }}
                    >
                      {/* Glossy pan sheen */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-white/20 to-white/40 opacity-70 pointer-events-none" />
                      {/* Swatch detail marker */}
                      <span className={`text-[8px] font-bold font-mono tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${pallet.textTheme}`}>
                        {pallet.hex}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="text-xs font-mono font-bold text-brand-gold-400 uppercase tracking-wider">{pallet.type}</h4>
                    <p className="text-sm font-serif font-medium text-white">{pallet.shade}</p>
                    <p className="text-[10px] text-neutral-cream-400 max-w-[150px] mx-auto leading-normal">{pallet.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* BOTTOM DOWNLOAD BUTTON CONTAINER */}
        <div className="text-center mt-12 flex flex-col items-center gap-4">
          <Button
            variant={isDownloading ? 'solid' : 'shimmer'}
            intent="accent"
            size="lg"
            shape="sleek"
            className="w-full max-w-md"
            isLoading={isDownloading}
            onClick={handleDownload}
            leftIcon={
              !isDownloading && (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              )
            }
          >
            {isDownloading ? `Generating Credentials (${downloadProgress}%)` : 'Download Beauty Passport'}
          </Button>
          <p className="text-[10px] font-mono tracking-widest text-neutral-cream-500 uppercase">
            Format: Secure PDF • Encrypted Metadata Included
          </p>
        </div>

      </Container>
    </section>
  );
};

export default BeautyPassportSection;
