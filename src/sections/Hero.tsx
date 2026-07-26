import React from 'react';
import Container from '../components/ui/Container';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-obsidian-950 text-white py-16 md:py-24 lg:py-0">
      {/* Custom Scoped CSS Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-slow-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes float-slow-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(-1.5deg); }
        }
        @keyframes float-slow-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(0.8deg); }
        }
        @keyframes orbit-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes scanner-sweep {
          0%, 100% { top: 12%; opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          50% { top: 88%; opacity: 0.8; }
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        @keyframes float-badge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        .animate-float-1 {
          animation: float-slow-1 7s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-slow-2 9s ease-in-out infinite;
        }
        .animate-float-3 {
          animation: float-slow-3 8s ease-in-out infinite;
        }
        .animate-orbit {
          animation: orbit-slow 40s linear infinite;
        }
        .animate-scanner {
          animation: scanner-sweep 5s ease-in-out infinite;
        }
        .animate-pulse-soft {
          animation: pulse-soft 6s ease-in-out infinite;
        }
        .animate-float-badge {
          animation: float-badge 3s ease-in-out infinite;
        }
      `}} />

      {/* Atmospheric Background Glowing Effects */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[600px] rounded-full bg-brand-blush-900/15 blur-[120px] pointer-events-none select-none animate-pulse-soft" />
      <div className="absolute bottom-0 left-0 w-[45vw] h-[45vw] max-w-[700px] rounded-full bg-brand-gold-900/10 blur-[130px] pointer-events-none select-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[30vw] h-[30vw] max-w-[400px] rounded-full bg-neutral-cream-600/5 blur-[100px] pointer-events-none select-none" />

      {/* Hero Content Container */}
      <Container size="xl" padding="airy" className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center min-h-[85vh]">
          
          {/* Left Side: Modern Copy & Premium Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-8 max-w-2xl lg:max-w-none">
            
            {/* Small Floating Badge */}
            <div className="self-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-sans font-medium bg-white/5 border border-white/10 text-brand-gold-300 shadow-luxury-glow animate-float-badge select-none">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold-400"></span>
                </span>
                ✨ AI-Powered Beauty Platform
              </span>
            </div>

            {/* Large Premium Startup Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7.5xl font-sans font-bold tracking-tight leading-[1.05] text-white">
              Discover Your <br />
              <span className="bg-gradient-to-r from-brand-gold-300 via-brand-blush-300 to-white bg-clip-text text-transparent">
                Perfect Beauty Look
              </span>
            </h1>

            {/* Luxury Description */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-cream-200/80 leading-relaxed font-sans max-w-xl">
              Upload your selfie, answer a quick AI beauty quiz, and receive personalized skincare and makeup recommendations.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                type="button"
                className="group relative px-8 py-4 bg-brand-gold-500 hover:bg-brand-gold-400 text-neutral-obsidian-950 font-sans font-semibold rounded-full shadow-[0_0_30px_-5px_rgba(194,149,85,0.45)] hover:shadow-[0_0_40px_rgba(194,149,85,0.65)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer inline-flex items-center justify-center gap-2 select-none"
              >
                <span>Start AI Analysis</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
              
              <button 
                type="button"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-sans font-medium rounded-full shadow-luxury-sm hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer inline-flex items-center justify-center gap-2 select-none"
              >
                Explore FaceCanvas
              </button>
            </div>
            
          </div>

          {/* Right Side: Abstract Beauty Illustration & Glassmorphic Cards */}
          <div className="lg:col-span-6 relative flex items-center justify-center w-full min-h-[480px] lg:min-h-[580px]">
            
            {/* Visual Framing Graphic */}
            <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
              
              {/* Outer Circular Orbital Path */}
              <div className="absolute inset-0 rounded-full border border-white/5 animate-orbit" />
              
              {/* Secondary Rotating Dotted Path */}
              <div className="absolute inset-4 rounded-full border border-dashed border-brand-gold-500/10 animate-orbit" style={{ animationDirection: 'reverse', animationDuration: '60s' }} />

              {/* Glowing Background Radial Art */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-brand-blush-900/20 via-brand-gold-900/15 to-neutral-obsidian-900 opacity-80 blur-xl animate-pulse-soft" />

              {/* Facial Geometry Mapping SVG Mesh */}
              <div className="absolute inset-10 flex items-center justify-center">
                <svg viewBox="0 0 400 400" className="w-full h-full text-white/15 select-none pointer-events-none drop-shadow-[0_0_8px_rgba(255,255,255,0.05)]">
                  <defs>
                    <linearGradient id="glow-line" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#C29555" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#E5BFC2" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#C29555" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>

                  {/* Geometric Scanned Lines */}
                  {/* Forehead & Upper Facial Nodes */}
                  <line x1="200" y1="80" x2="130" y2="130" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="200" y1="80" x2="270" y2="130" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="130" y1="130" x2="270" y2="130" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                  
                  {/* Eye Guideline & Connector Mesh */}
                  <line x1="130" y1="130" x2="160" y2="170" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="270" y1="130" x2="240" y2="170" stroke="currentColor" strokeWidth="0.75" />
                  
                  <line x1="160" y1="170" x2="240" y2="170" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="200" y1="80" x2="200" y2="230" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                  
                  {/* Cheeks & Nose Tip Connections */}
                  <line x1="160" y1="170" x2="115" y2="225" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="240" y1="170" x2="285" y2="225" stroke="currentColor" strokeWidth="0.75" />
                  
                  <line x1="160" y1="170" x2="200" y2="230" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="240" y1="170" x2="200" y2="230" stroke="currentColor" strokeWidth="0.75" />
                  
                  <line x1="115" y1="225" x2="200" y2="230" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="285" y1="225" x2="200" y2="230" stroke="currentColor" strokeWidth="0.75" />

                  {/* Mouth & Jawlines */}
                  <line x1="115" y1="225" x2="125" y2="295" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="285" y1="225" x2="275" y2="295" stroke="currentColor" strokeWidth="0.75" />
                  
                  <line x1="200" y1="230" x2="200" y2="290" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="115" y1="225" x2="200" y2="290" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="285" y1="225" x2="200" y2="290" stroke="currentColor" strokeWidth="0.75" />
                  
                  <line x1="125" y1="295" x2="200" y2="345" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="275" y1="295" x2="200" y2="345" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="200" y1="290" x2="200" y2="345" stroke="currentColor" strokeWidth="0.75" />

                  {/* Face Outline Silhouette */}
                  <path 
                    d="M 130,130 C 95,190 100,260 125,295 C 150,330 180,345 200,345 C 220,345 250,330 275,295 C 300,260 305,190 270,130" 
                    fill="none" 
                    stroke="url(#glow-line)" 
                    strokeWidth="1.25" 
                  />

                  {/* Feature Outlines (Eyes, Nose, Lips) */}
                  {/* Left Eye */}
                  <path d="M 148,170 Q 160,162 172,170 Q 160,178 148,170 Z" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.6" />
                  {/* Right Eye */}
                  <path d="M 228,170 Q 240,162 252,170 Q 240,178 228,170 Z" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.6" />
                  {/* Nose */}
                  <path d="M 194,228 Q 200,233 206,228" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.6" />
                  {/* Lips */}
                  <path d="M 182,286 Q 200,278 218,286 Q 200,296 182,286 Z" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.6" />

                  {/* Highlight Nodes */}
                  <circle cx="200" cy="80" r="3.5" fill="#C29555" />
                  <circle cx="130" cy="130" r="3" fill="#E5BFC2" />
                  <circle cx="270" cy="130" r="3" fill="#E5BFC2" />
                  <circle cx="160" cy="170" r="3.5" fill="#FAF7F2" />
                  <circle cx="240" cy="170" r="3.5" fill="#FAF7F2" />
                  <circle cx="115" cy="225" r="3" fill="#E5BFC2" />
                  <circle cx="285" cy="225" r="3" fill="#E5BFC2" />
                  <circle cx="200" cy="230" r="4.5" fill="#C29555" />
                  <circle cx="125" cy="295" r="3" fill="#E5BFC2" />
                  <circle cx="275" cy="295" r="3" fill="#E5BFC2" />
                  <circle cx="200" cy="290" r="3.5" fill="#FAF7F2" />
                  <circle cx="200" cy="345" r="4.5" fill="#C29555" />
                </svg>
              </div>

              {/* Glowing Laser Scanner Line */}
              <div className="absolute left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-transparent via-brand-gold-300 to-transparent shadow-[0_0_12px_#C29555] animate-scanner pointer-events-none select-none z-10" />

              {/* FLOATING GLASSMORPHIC CARDS */}

              {/* Card 1: AI Skin Analyzer Score */}
              <div className="absolute top-2 right-[-24px] sm:right-[-12px] w-[210px] bg-neutral-obsidian-950/40 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-luxury-lg hover:border-white/20 hover:bg-neutral-obsidian-950/60 transition-all duration-300 ease-out select-none animate-float-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] tracking-[0.18em] uppercase font-sans text-brand-gold-300 font-semibold">SKIN ANALYZER</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-medium px-2 py-0.5 rounded-full border border-emerald-500/20">LIVE</span>
                </div>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-3xl font-sans font-bold tracking-tight text-white">92</span>
                  <span className="text-xs text-neutral-cream-300/60">/ 100</span>
                  <span className="text-xs font-semibold text-emerald-400 ml-auto">Excellent</span>
                </div>
                
                {/* Visual Metric Bars */}
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-[10px] text-neutral-cream-300/80 mb-1">
                      <span>Hydration</span>
                      <span className="font-semibold text-white">88%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[88%] bg-gradient-to-r from-brand-blush-400 to-brand-gold-400 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] text-neutral-cream-300/80 mb-1">
                      <span>Luminosity</span>
                      <span className="font-semibold text-white">94%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[94%] bg-gradient-to-r from-brand-blush-400 to-brand-gold-400 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Perfect Shade Matches */}
              <div className="absolute bottom-6 left-[-24px] sm:left-[-12px] w-[190px] bg-neutral-obsidian-950/40 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-luxury-lg hover:border-white/20 hover:bg-neutral-obsidian-950/60 transition-all duration-300 ease-out select-none animate-float-2">
                <div className="text-[10px] tracking-[0.18em] uppercase font-sans text-brand-gold-300 font-semibold mb-2">SHADE MATCH</div>
                <div className="text-xl font-sans font-bold text-white mb-3">99.4% Match</div>
                
                {/* Foundation Tones Palette */}
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-7 h-7 rounded-full border border-brand-gold-400 animate-ping opacity-30" />
                    <span className="w-5 h-5 rounded-full bg-[#EBCFB4] border-2 border-brand-gold-400 shadow-luxury-sm z-10" />
                  </div>
                  <span className="w-5 h-5 rounded-full bg-[#DFB796] border border-white/10 opacity-70 hover:opacity-100 transition-opacity duration-250 cursor-pointer" />
                  <span className="w-5 h-5 rounded-full bg-[#CD9B78] border border-white/10 opacity-70 hover:opacity-100 transition-opacity duration-250 cursor-pointer" />
                  <span className="text-[10px] text-neutral-cream-300/70 font-sans ml-auto">Warm Sand</span>
                </div>
              </div>

              {/* Card 3: Diagnostic Mapping Status */}
              <div className="absolute bottom-20 right-[-32px] sm:right-[-20px] w-[170px] bg-neutral-obsidian-950/40 backdrop-blur-lg border border-white/10 rounded-2xl p-3.5 shadow-luxury-lg hover:border-white/20 hover:bg-neutral-obsidian-950/60 transition-all duration-300 ease-out select-none animate-float-3">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-3.5 h-3.5 text-brand-blush-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-[10px] tracking-[0.18em] uppercase font-sans text-brand-gold-300 font-semibold">DIAGNOSTIC</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px] font-sans">
                    <span className="text-neutral-cream-300/60">Geometry</span>
                    <span className="text-white font-medium">98.6% Sym</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-sans">
                    <span className="text-neutral-cream-300/60">Features</span>
                    <span className="text-emerald-400 font-medium">Aligned</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;
