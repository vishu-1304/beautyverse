import React, { useEffect, useState } from 'react';
import Container from '../components/ui/Container';
import { fetchAnalysisHistory } from '../services/analysisService';
import type { HistoryRecord } from '../services/analysisService';

interface AnalysisHistorySectionProps {
  refreshTrigger: number;
}

export const AnalysisHistorySection: React.FC<AnalysisHistorySectionProps> = ({ refreshTrigger }) => {
  const [history, setHistory] = useState<HistoryRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadHistory = () => {
    setIsLoading(true);
    setError(null);
    fetchAnalysisHistory()
      .then((data) => {
        setHistory(data);
        setIsLoading(false);
      })
      .catch((err: any) => {
        setError(err.message || 'Failed to load analysis history.');
        setIsLoading(false);
      });
  };

  useEffect(() => {
    loadHistory();
  }, [refreshTrigger]);

  const formatDate = (dateString: string) => {
    try {
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      return new Date(dateString).toLocaleDateString(undefined, options);
    } catch (e) {
      return dateString;
    }
  };

  return (
    <section id="analysis-history-section" className="relative w-full overflow-hidden bg-neutral-obsidian-950 text-white py-20 border-b border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-brand-gold-900/5 blur-[120px] pointer-events-none select-none" />
      
      <Container size="xl" padding="airy" className="relative z-10 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium bg-white/5 border border-white/10 text-brand-gold-300 shadow-luxury-sm select-none">
            📜 Diagnostic Archives
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-white leading-tight">
            Analysis History
          </h2>
          <p className="text-xs md:text-sm text-neutral-cream-300/60 leading-relaxed font-sans max-w-xl mx-auto">
            Review your previous Dermal & Face scans to track skin conditions and recommendation trends.
          </p>
        </div>

        {/* LOADING STATE (Skeleton Cards) */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 space-y-6 animate-pulse">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <div className="h-4 w-28 bg-white/10 rounded" />
                  <div className="h-3 w-16 bg-white/10 rounded" />
                </div>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex justify-between">
                      <div className="h-3 w-16 bg-white/10 rounded" />
                      <div className="h-3 w-24 bg-white/10 rounded" />
                    </div>
                  ))}
                </div>
                <div className="h-10 bg-white/5 rounded-lg w-full pt-2" />
              </div>
            ))}
          </div>
        )}

        {/* ERROR STATE */}
        {!isLoading && error && (
          <div className="max-w-md mx-auto text-center bg-white/[0.02] border border-red-500/20 rounded-2xl p-8 space-y-6 shadow-luxury-sm">
            <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mx-auto">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="space-y-2">
              <h4 className="text-base font-medium text-white">Diagnostics Offline</h4>
              <p className="text-xs text-neutral-cream-300/60 leading-relaxed font-sans">{error}</p>
            </div>
            <button
              type="button"
              onClick={loadHistory}
              className="px-6 py-2.5 bg-brand-gold-500 hover:bg-brand-gold-400 text-neutral-obsidian-950 text-xs tracking-wider uppercase font-semibold rounded-full shadow-luxury-glow hover:scale-[1.02] transition duration-300"
            >
              Retry Loading
            </button>
          </div>
        )}

        {/* EMPTY STATE */}
        {!isLoading && !error && history.length === 0 && (
          <div className="max-w-md mx-auto text-center bg-white/[0.02] border border-white/10 rounded-2xl p-8 space-y-4">
            <p className="text-sm text-neutral-cream-300/60 font-sans italic">
              No previous dermal analyses found. Perform a scan above to build your archive.
            </p>
          </div>
        )}

        {/* HISTORY CARDS LIST */}
        {!isLoading && !error && history.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in">
            {history.map((record) => (
              <div 
                key={record._id} 
                className="bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-brand-gold-400/30 rounded-2xl p-6 flex flex-col justify-between shadow-luxury-glow transition-all duration-300 hover:scale-[1.01] hover:bg-white/[0.04] group relative overflow-hidden"
              >
                {/* Gold corner shine */}
                <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-brand-gold-400/5 blur-xl pointer-events-none" />

                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="border-b border-white/5 pb-3.5 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-neutral-cream-400/60 uppercase tracking-widest">
                      {formatDate(record.createdAt)}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Score: {record.beautyScore}%
                    </span>
                  </div>

                  {/* Attributes list */}
                  <div className="space-y-2.5 font-sans text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-cream-400/80 uppercase tracking-widest text-[9px]">Face Shape</span>
                      <span className="text-white font-medium">{record.faceShape}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-cream-400/80 uppercase tracking-widest text-[9px]">Skin Tone</span>
                      <span className="text-white font-medium">{record.skinTone}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-cream-400/80 uppercase tracking-widest text-[9px]">Skin Type</span>
                      <span className="text-white font-medium">{record.skinType}</span>
                    </div>
                  </div>
                </div>

                {/* Recommendation box */}
                <div className="mt-5 pt-4 border-t border-white/5">
                  <span className="text-[8px] font-bold text-brand-gold-400/80 uppercase tracking-widest block mb-1">
                    Bespoke Formula
                  </span>
                  <p className="text-white font-serif italic text-sm font-medium leading-relaxed group-hover:text-brand-gold-300 transition-colors">
                    {record.recommendation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default AnalysisHistorySection;
