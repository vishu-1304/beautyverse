import React from 'react';

interface LoadingOverlayProps {
  isLoading: boolean;
  progress: number;
  statusText?: string;
  showSuccess?: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isLoading,
  progress,
  statusText = 'Initializing AI Analysis...',
  showSuccess = false,
}) => {
  if (!isLoading) return null;

  const isCompleted = progress >= 100 || showSuccess;

  return (
    <div className="absolute inset-0 bg-neutral-obsidian-950/95 z-40 flex flex-col items-center justify-center p-6 backdrop-blur-md transition-all duration-500 rounded-2xl">
      {/* Luxury scanning HUD container with glowing border */}
      <div 
        className={`relative w-full max-w-[280px] aspect-[4/3] rounded-xl overflow-hidden bg-neutral-obsidian-900 border transition-all duration-700 flex items-center justify-center ${
          isCompleted 
            ? 'border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.2)]' 
            : 'border-brand-gold-500/30 shadow-[0_0_25px_rgba(194,149,85,0.15)]'
        }`}
      >
        {/* HUD corners */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-brand-gold-400/40" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-brand-gold-400/40" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-brand-gold-400/40" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-brand-gold-400/40" />

        {/* Scan lines & Overlay Tint */}
        {!isCompleted ? (
          <>
            {/* Horizontal scanner beam line */}
            <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-gold-400 to-transparent shadow-[0_0_12px_#C29555] animate-scanner-line pointer-events-none z-10" />
            <div className="absolute inset-0 bg-brand-gold-500/5 pointer-events-none" />
            
            {/* Face Scanning SVG Wireframe */}
            <svg viewBox="0 0 200 200" className="w-32 h-32 text-brand-gold-400/30 animate-pulse-soft">
              <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" fill="none" />
              <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
              <path d="M70,80 C70,110 80,135 100,135 C120,135 130,110 130,80" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="85" cy="80" r="2.5" fill="currentColor" opacity="0.6" />
              <circle cx="115" cy="80" r="2.5" fill="currentColor" opacity="0.6" />
              {/* Lips grid */}
              <path d="M90,110 Q100,115 110,110 Q100,107 90,110" fill="none" stroke="currentColor" strokeWidth="0.75" />
              {/* Eye contours */}
              <path d="M75,80 Q85,73 95,80" fill="none" stroke="currentColor" strokeWidth="0.75" />
              <path d="M105,80 Q115,73 125,80" fill="none" stroke="currentColor" strokeWidth="0.75" />
              <line x1="100" y1="40" x2="100" y2="160" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
              <line x1="40" y1="100" x2="160" y2="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
            </svg>
          </>
        ) : (
          /* Success Checkmark State */
          <div className="flex flex-col items-center justify-center space-y-3 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[10px] font-mono tracking-widest text-emerald-400">ANALYSIS SECURED</span>
          </div>
        )}

        {/* Tech style indicators */}
        <div className="absolute top-3 left-3 text-[8px] font-mono text-brand-gold-400/40">CAM_DMAX_V2</div>
        <div className="absolute bottom-3 right-3 text-[8px] font-mono text-brand-gold-400/40">SECURE_SCAN</div>
      </div>

      {/* Progress and status */}
      <div className="w-full max-w-[320px] text-center mt-6 space-y-4">
        <p className={`text-sm font-serif italic transition-colors duration-300 ${isCompleted ? 'text-emerald-400 font-semibold' : 'text-brand-gold-300 animate-pulse'}`}>
          {isCompleted ? 'Report Synthesized Successfully' : statusText}
        </p>
        
        <div className="h-1.5 w-full bg-white/5 border border-white/10 rounded-full overflow-hidden relative">
          <div 
            className={`h-full transition-all duration-300 ease-out ${isCompleted ? 'bg-emerald-500' : 'bg-brand-gold-400 shadow-[0_0_8px_#C29555]'}`} 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className={`text-[10px] font-mono tracking-widest transition-colors duration-300 ${isCompleted ? 'text-emerald-400/70' : 'text-neutral-cream-400'}`}>
          {isCompleted ? 'COMPLETED' : `PROGRESS: ${Math.round(progress)}%`}
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
