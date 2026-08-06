import React, { useState, useRef } from 'react';
import Container from '../components/ui/Container';
import { analyzeFace } from '../services/analysisService';
import LoadingOverlay from '../components/ui/LoadingOverlay';

export const FaceUploadSection: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [faceShape, setFaceShape] = useState('Oval');
  const [skinTone, setSkinTone] = useState('Warm');
  const [skinType, setSkinType] = useState('Combination');
  const [confidence, setConfidence] = useState('98%');
  const [aiStatus, setAiStatus] = useState('Ready');
  const [hydration, setHydration] = useState<number | null>(null);
  const [symmetry, setSymmetry] = useState<number | null>(null);
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [errorText, setErrorText] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (isAnalyzing) return;
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const performAnalysis = (file: File) => {
    // Validate image file type
    if (!file.type.startsWith('image/')) {
      setErrorText('Invalid file format. Please upload an image file (PNG, JPG, or JPEG).');
      setIsAnalyzing(true); // Show overlay in error state
      return;
    }

    setIsAnalyzing(true);
    setErrorText(null);
    setAnalysisProgress(0);
    setAiStatus('Scanning Face...');

    const startTime = Date.now();
    const duration = 5000; // Reach 95% in 5 seconds dynamically

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / duration) * 95, 95);
      setAnalysisProgress(progress);

      if (progress < 15) {
        setAiStatus('Scanning Face...');
      } else if (progress < 30) {
        setAiStatus('Analyzing Skin...');
      } else if (progress < 50) {
        setAiStatus('Detecting Face Shape...');
      } else if (progress < 70) {
        setAiStatus('Detecting Skin Tone...');
      } else if (progress < 85) {
        setAiStatus('Preparing Beauty Passport...');
      } else {
        setAiStatus('Generating Recommendations...');
      }
    }, 100);

    analyzeFace(file)
      .then((result) => {
        clearInterval(progressInterval);
        setAnalysisProgress(100);
        setAiStatus('Complete');

        // Pause briefly in success state for visual luxury reward, then render data
        setTimeout(() => {
          setFaceShape(result.faceShape);
          setSkinTone(result.skinTone);
          setSkinType(result.skinType);
          setConfidence(`${result.confidence}%`);
          setHydration(result.hydration);
          setSymmetry(result.symmetry);
          setRecommendation(result.recommendation);
          
          setIsAnalyzing(false);
          setErrorText(null);
        }, 1200);
      })
      .catch((err: any) => {
        clearInterval(progressInterval);
        setErrorText(err.message || 'Dermal analysis failed. Please try again.');
        setAiStatus('Error');
      });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (isAnalyzing) return;
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      performAnalysis(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isAnalyzing) return;
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      performAnalysis(file);
    }
  };

  const triggerFileInput = () => {
    if (isAnalyzing) return;
    fileInputRef.current?.click();
  };

  const handleAnalyze = () => {
    if (!selectedFile) {
      triggerFileInput();
      return;
    }
    performAnalysis(selectedFile);
  };

  return (
    <section id="face-upload-section" className="relative w-full overflow-hidden bg-neutral-obsidian-950 text-white py-24 md:py-32 border-b border-white/5">
      {/* Glow animations inside scanning overlay */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan-horizontal {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(220px); }
        }
        .animate-scan-horizontal {
          animation: scan-horizontal 2.5s ease-in-out infinite;
        }
      `}} />

      {/* Atmospheric Background Blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[700px] rounded-full bg-brand-gold-900/5 blur-[150px] pointer-events-none select-none" />
      <div className="absolute top-0 right-1/4 w-[35vw] h-[35vw] max-w-[500px] rounded-full bg-brand-blush-900/10 blur-[120px] pointer-events-none select-none animate-pulse-soft" />

      <Container size="xl" padding="airy" className="relative z-10 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium bg-white/5 border border-white/10 text-brand-blush-300 shadow-luxury-sm select-none">
            🤳 Face Analysis Studio
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-white leading-tight">
            AI Dermal & Contour Scan
          </h2>
          <p className="text-sm md:text-base text-neutral-cream-300/80 leading-relaxed font-sans max-w-xl mx-auto">
            Take a clear photo of your face under natural lighting. Our computer vision model maps over 120 facial landmarks.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* LEFT SIDE: Drag & Drop Upload */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div 
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={triggerFileInput}
              className={`flex-1 min-h-[350px] rounded-2xl border border-dashed flex flex-col items-center justify-center text-center p-8 transition-all duration-500 cursor-pointer relative overflow-hidden group select-none ${
                isDragging 
                  ? 'border-brand-gold-400 bg-brand-gold-950/20 shadow-luxury-glow scale-[1.01]' 
                  : previewUrl 
                    ? 'border-white/20 bg-neutral-obsidian-900/40 hover:border-brand-gold-400/50' 
                    : 'border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10'
              } ${isAnalyzing ? 'pointer-events-none opacity-50' : ''}`}
            >
              <input
                ref={fileInputRef}
                id="face-upload-input"
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                className="hidden"
                onChange={handleFileChange}
                disabled={isAnalyzing}
              />

              {previewUrl ? (
                // Show uploaded image preview
                <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-neutral-obsidian-950">
                  <img 
                    src={previewUrl} 
                    alt="Selfie Preview" 
                    className="w-full h-full object-cover opacity-90 transition-all group-hover:scale-105 duration-700" 
                  />
                  {/* Visual Frame HUD Elements */}
                  <div className="absolute inset-4 border border-white/20 rounded-lg pointer-events-none" />
                  <div className="absolute top-6 left-6 text-[9px] font-mono text-white/50 tracking-widest bg-black/60 px-2 py-0.5 rounded">SCANNER READY</div>
                  
                  {isAnalyzing && (
                    <>
                      {/* Scanning Line Beam */}
                      <div className="absolute left-0 right-0 h-0.5 bg-brand-gold-400 shadow-[0_0_12px_#C29555] animate-scan-horizontal pointer-events-none" />
                      {/* Scanning Overlay Tint */}
                      <div className="absolute inset-0 bg-brand-gold-500/10 pointer-events-none" />
                    </>
                  )}
                  
                  <div className="absolute bottom-6 right-6">
                    <span className="text-xs bg-brand-gold-500 hover:bg-brand-gold-400 text-neutral-obsidian-950 font-sans font-semibold px-4 py-2 rounded-full transition shadow-luxury-glow">
                      Change Image
                    </span>
                  </div>
                </div>
              ) : (
                // Default drop area content
                <div className="space-y-6 max-w-sm">
                  {/* Upload Icon */}
                  <div className="mx-auto w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-cream-300 group-hover:scale-110 group-hover:border-brand-gold-400/40 group-hover:bg-brand-gold-950/10 transition-all duration-500">
                    <svg className="w-8 h-8 text-neutral-cream-300 group-hover:text-brand-gold-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-medium text-white tracking-wide">
                      Upload Your Selfie
                    </h3>
                    <p className="text-xs text-neutral-cream-400 font-sans tracking-wide">
                      PNG, JPG or JPEG
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-brand-gold-400/50 text-white text-xs tracking-wider uppercase font-semibold rounded-full shadow-luxury-sm group-hover:scale-105 active:scale-[0.97] transition-all duration-300 select-none pointer-events-none"
                    >
                      Choose Image
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE: AI Analysis Preview Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-luxury-glow flex flex-col justify-between relative overflow-hidden">
              {/* Gold light shine at corner */}
              <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-brand-gold-400/10 blur-xl pointer-events-none" />

              {/* Reusable Loading Overlay component with luxury animations */}
              <LoadingOverlay 
                isLoading={isAnalyzing} 
                progress={analysisProgress} 
                statusText={aiStatus} 
                errorText={errorText}
                onRetry={() => selectedFile && performAnalysis(selectedFile)}
                onCancel={() => {
                  setIsAnalyzing(false);
                  setErrorText(null);
                }}
              />

              <div className="space-y-6">
                {/* Card Title Header */}
                <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                  <h3 className="text-lg font-serif font-medium text-brand-gold-300">
                    AI Analysis Report
                  </h3>
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium border ${
                    aiStatus === 'Ready' 
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      : aiStatus === 'Complete' 
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : aiStatus === 'Error'
                          ? 'bg-red-500/10 text-red-400 border-red-500/20'
                          : 'bg-brand-gold-500/10 text-brand-gold-400 border-brand-gold-500/20 animate-pulse'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      aiStatus === 'Ready' || aiStatus === 'Complete'
                        ? 'bg-emerald-400' 
                        : aiStatus === 'Error'
                          ? 'bg-red-400'
                          : 'bg-brand-gold-400'
                    }`} />
                    {aiStatus}
                  </span>
                </div>

                {/* Analysis Parameters Grid */}
                <div className="space-y-3.5 font-sans text-xs">
                  {/* Parameter: Face Shape */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition duration-300">
                    <span className="text-neutral-cream-400 uppercase tracking-widest text-[10px]">Face Shape</span>
                    <span className="text-white font-medium">{faceShape}</span>
                  </div>

                  {/* Parameter: Skin Tone */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition duration-300">
                    <span className="text-neutral-cream-400 uppercase tracking-widest text-[10px]">Skin Tone</span>
                    <span className="text-white font-medium">{skinTone}</span>
                  </div>

                  {/* Parameter: Skin Type */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition duration-300">
                    <span className="text-neutral-cream-400 uppercase tracking-widest text-[10px]">Skin Type</span>
                    <span className="text-white font-medium">{skinType}</span>
                  </div>

                  {/* Parameter: Hydration Level */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition duration-300">
                    <span className="text-neutral-cream-400 uppercase tracking-widest text-[10px]">Hydration Level</span>
                    <span className="text-brand-gold-300 font-medium">
                      {hydration !== null ? `${hydration}%` : 'Pending'}
                    </span>
                  </div>

                  {/* Parameter: Facial Symmetry */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition duration-300">
                    <span className="text-neutral-cream-400 uppercase tracking-widest text-[10px]">Facial Symmetry</span>
                    <span className="text-brand-gold-300 font-medium">
                      {symmetry !== null ? `${symmetry}%` : 'Pending'}
                    </span>
                  </div>

                  {/* Parameter: Confidence */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition duration-300">
                    <span className="text-neutral-cream-400 uppercase tracking-widest text-[10px]">Confidence Score</span>
                    <span className="text-emerald-400 font-semibold">{confidence}</span>
                  </div>

                  {/* Parameter: Recommendation */}
                  <div className="flex flex-col gap-1.5 p-3.5 rounded-lg bg-brand-gold-950/20 border border-brand-gold-400/20 hover:border-brand-gold-400/40 transition duration-300">
                    <span className="text-brand-gold-400 uppercase tracking-widest text-[9px] font-bold">AI Bespoke Recommendation</span>
                    <span className="text-white font-serif italic text-base font-medium">
                      {recommendation || 'Run scan to calculate'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Button: Analyze with AI */}
        <div className="flex justify-center mt-14">
          <button
            type="button"
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className={`group relative px-12 py-5 font-sans font-semibold text-sm tracking-widest uppercase rounded-full transition-all duration-300 ease-out cursor-pointer inline-flex items-center justify-center gap-3 select-none ${
              isAnalyzing 
                ? 'bg-neutral-cream-800 text-white/50 cursor-not-allowed' 
                : 'bg-brand-gold-500 hover:bg-brand-gold-400 text-neutral-obsidian-950 shadow-[0_0_30px_-5px_rgba(194,149,85,0.45)] hover:shadow-[0_0_40px_rgba(194,149,85,0.65)] hover:scale-[1.03] active:scale-[0.98]'
            }`}
          >
            {isAnalyzing ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white/60" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span>Analyzing Face Profile...</span>
              </>
            ) : (
              <>
                <span>Analyze with AI</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </>
            )}
          </button>
        </div>
      </Container>
    </section>
  );
};

export default FaceUploadSection;
