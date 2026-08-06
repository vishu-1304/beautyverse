import React, { useState, useEffect } from 'react';

interface LoadingOverlayProps {
  isLoading: boolean;
  progress: number;
  statusText?: string;
  showSuccess?: boolean;
  errorText?: string | null;
  onRetry?: () => void;
  onCancel?: () => void;
}

const STATUS_MESSAGES = [
  "Scanning Face...",
  "Analyzing Skin...",
  "Detecting Face Shape...",
  "Detecting Skin Tone...",
  "Preparing Beauty Passport...",
  "Generating Recommendations..."
];

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isLoading,
  progress,
  statusText,
  showSuccess = false,
  errorText = null,
  onRetry,
  onCancel,
}) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  // Cycle messages with a smooth fade effect
  useEffect(() => {
    if (!isLoading || errorText) {
      setMessageIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setMessageIndex((prev) => (prev + 1) % STATUS_MESSAGES.length);
        setVisible(true);
      }, 400); // Match fade transition duration
    }, 2500);

    return () => clearInterval(interval);
  }, [isLoading, errorText]);

  if (!isLoading) return null;

  const isCompleted = progress >= 100 || showSuccess;

  return (
    <div className="fixed inset-0 z-50 bg-neutral-obsidian-950/98 backdrop-blur-2xl flex flex-col items-center justify-center p-6 transition-all duration-500">
      {/* Styles for premium sweep and rotate animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scanner-sweep {
          0%, 100% { top: 0%; opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          50% { top: 100%; opacity: 1; }
        }
        .animate-scanner-line {
          animation: scanner-sweep 3s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.03); }
        }
        .animate-pulse-soft-dermal {
          animation: pulse-soft 3s ease-in-out infinite;
        }
      `}} />

      {/* Atmospheric Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-brand-gold-900/10 blur-[130px] pointer-events-none select-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-brand-blush-900/10 blur-[130px] pointer-events-none select-none animate-pulse" />

      {/* Glassmorphic luxury panel */}
      <div className="relative w-full max-w-md bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-md flex flex-col items-center justify-center shadow-luxury-glow transition-all duration-500">
        
        {/* Decorative corner HUD markers */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-brand-gold-400/30" />
        <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-brand-gold-400/30" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-brand-gold-400/30" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-brand-gold-400/30" />

        {errorText ? (
          /* PREMIUM ERROR UI */
          <div className="w-full text-center space-y-6 animate-fade-in">
            {/* Caution/Error Glow Icon */}
            <div className="mx-auto w-20 h-20 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-light text-white tracking-wide">
                Analysis Interrupted
              </h3>
              <p className="text-sm text-neutral-cream-300/80 leading-relaxed font-sans max-w-sm mx-auto">
                {errorText}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              {onRetry && (
                <button
                  type="button"
                  onClick={onRetry}
                  className="px-8 py-3 bg-brand-gold-500 hover:bg-brand-gold-400 text-neutral-obsidian-950 font-sans font-semibold text-xs tracking-wider uppercase rounded-full shadow-luxury-glow transition-all duration-300 hover:scale-[1.03]"
                >
                  Retry Analysis
                </button>
              )}
              {onCancel && (
                <button
                  type="button"
                  onClick={onCancel}
                  className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-sans font-semibold text-xs tracking-wider uppercase rounded-full transition-all duration-300 hover:scale-[1.03]"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        ) : (
          /* ACTIVE SCANNING / SUCCESS UI */
          <div className="w-full flex flex-col items-center">
            
            {/* HUD Scanning Circle Container */}
            <div 
              className={`relative w-64 h-64 rounded-full overflow-hidden bg-neutral-obsidian-900/60 border transition-all duration-700 flex items-center justify-center ${
                isCompleted 
                  ? 'border-emerald-500/40 shadow-[0_0_40px_rgba(16,185,129,0.2)]' 
                  : 'border-brand-gold-500/20 shadow-[0_0_30px_rgba(194,149,85,0.1)]'
              }`}
            >
              {/* Outer spinning tech grid */}
              <div className="absolute inset-2 rounded-full border border-dashed border-brand-gold-500/10 animate-spin-slow" />
              
              {!isCompleted ? (
                <>
                  {/* Sweep scan bar */}
                  <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-gold-400 to-transparent shadow-[0_0_15px_#C29555] animate-scanner-line pointer-events-none z-10" />
                  
                  {/* Face wireframe grid */}
                  <svg viewBox="0 0 200 200" className="w-36 h-36 text-brand-gold-400/25 animate-pulse-soft-dermal">
                    <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" fill="none" />
                    <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
                    <path d="M70,80 C70,110 80,135 100,135 C120,135 130,110 130,80" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="85" cy="80" r="2.5" fill="currentColor" opacity="0.5" />
                    <circle cx="115" cy="80" r="2.5" fill="currentColor" opacity="0.5" />
                    <path d="M90,110 Q100,115 110,110 Q100,107 90,110" fill="none" stroke="currentColor" strokeWidth="0.75" />
                    <path d="M75,80 Q85,73 95,80" fill="none" stroke="currentColor" strokeWidth="0.75" />
                    <path d="M105,80 Q115,73 125,80" fill="none" stroke="currentColor" strokeWidth="0.75" />
                    <line x1="100" y1="35" x2="100" y2="165" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                    <line x1="35" y1="100" x2="165" y2="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                  </svg>
                </>
              ) : (
                /* Success checkmark */
                <div className="flex flex-col items-center justify-center space-y-4 animate-fade-in">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-emerald-400">ANALYSIS SECURED</span>
                </div>
              )}
            </div>

            {/* Status and Progress Indicators */}
            <div className="w-full mt-8 text-center space-y-4 font-sans">
              <div className="h-6 overflow-hidden flex justify-center">
                <p 
                  className={`text-lg font-serif italic tracking-wide transition-all duration-300 ${
                    isCompleted 
                      ? 'text-emerald-400 font-semibold opacity-100 translate-y-0' 
                      : visible 
                        ? 'text-brand-gold-300 opacity-100 translate-y-0' 
                        : 'text-brand-gold-300 opacity-0 translate-y-2'
                  }`}
                >
                  {isCompleted ? 'Beauty Passport Generated' : (statusText || STATUS_MESSAGES[messageIndex])}
                </p>
              </div>

              {/* Dermal HUD Progress bar */}
              <div className="h-1.5 w-full bg-white/5 border border-white/10 rounded-full overflow-hidden relative">
                <div 
                  className={`h-full transition-all duration-300 ease-out ${
                    isCompleted ? 'bg-emerald-500' : 'bg-brand-gold-400 shadow-[0_0_10px_#C29555]'
                  }`} 
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-[9px] font-mono tracking-widest text-neutral-cream-400/60 px-1">
                <span>SYSTEM_LOCK: ACTIVE</span>
                <span className={isCompleted ? 'text-emerald-400' : 'text-brand-gold-400'}>
                  {isCompleted ? 'COMPLETED' : `SCANNING: ${Math.round(progress)}%`}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingOverlay;
