import React, { useState } from 'react';
import Container from '../components/ui/Container';

export const BeautyQuizSection: React.FC = () => {
  // Local state for the quiz selections
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [selectedSkinType, setSelectedSkinType] = useState<string>('');
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [selectedPreference, setSelectedPreference] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisStep, setAnalysisStep] = useState('');
  const [showResultToast, setShowResultToast] = useState(false);

  const skinTypes = [
    { id: 'dry', label: 'Dry', desc: 'Flaky, tight, or dull appearance' },
    { id: 'oily', label: 'Oily', desc: 'Excess sebum, shine, and enlarged pores' },
    { id: 'combination', label: 'Combination', desc: 'Oily T-zone with dry or normal cheeks' },
    { id: 'sensitive', label: 'Sensitive', desc: 'Prone to redness, itching, or burning' },
  ];

  const skinConcerns = [
    { id: 'acne', label: 'Acne', desc: 'Breakouts & blemishes' },
    { id: 'pigmentation', label: 'Pigmentation', desc: 'Dark spots & uneven tone' },
    { id: 'dark_circles', label: 'Dark Circles', desc: 'Under-eye discoloration' },
    { id: 'wrinkles', label: 'Wrinkles', desc: 'Fine lines & loss of elasticity' },
    { id: 'dryness', label: 'Dryness', desc: 'Dehydration & rough patches' },
  ];

  const makeupPreferences = [
    { id: 'natural', label: 'Natural', desc: 'No-makeup makeup look' },
    { id: 'glam', label: 'Glam', desc: 'Bold, high-definition makeup' },
    { id: 'bridal', label: 'Bridal', desc: 'Elegant, timeless glow' },
    { id: 'daily', label: 'Daily', desc: 'Fresh, quick everyday look' },
  ];

  const toggleSkinConcern = (concernId: string) => {
    if (selectedConcerns.includes(concernId)) {
      setSelectedConcerns(selectedConcerns.filter((id) => id !== concernId));
    } else {
      setSelectedConcerns([...selectedConcerns, concernId]);
    }
  };

  const handleStartAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName) {
      alert('Please enter your full name to begin the AI analysis.');
      return;
    }
    
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    setAnalysisStep('Calibrating dermal mapping sensors...');

    const steps = [
      { progress: 20, step: 'Analyzing facial geometry & skin tone distribution...' },
      { progress: 50, step: 'Evaluating melanin levels & pore diameter grids...' },
      { progress: 80, step: 'Synthesizing skincare ingredients matrix matching your profile...' },
      { progress: 100, step: 'Bespoke Beauty Passport generated successfully!' }
    ];

    steps.forEach((stepItem, index) => {
      setTimeout(() => {
        setAnalysisProgress(stepItem.progress);
        setAnalysisStep(stepItem.step);
        if (stepItem.progress === 100) {
          setTimeout(() => {
            setIsAnalyzing(false);
            setShowResultToast(true);
            // Auto hide toast after 5s
            setTimeout(() => setShowResultToast(false), 5000);
          }, 1200);
        }
      }, (index + 1) * 1000);
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-neutral-obsidian-950 text-white py-24 md:py-32 border-b border-white/5">
      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scanner-sweep {
          0%, 100% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          50% { top: 100%; opacity: 1; }
        }
        .animate-scanner-line {
          animation: scanner-sweep 3s ease-in-out infinite;
        }
      `}} />

      {/* Atmospheric Background Glowing Effects */}
      <div className="absolute top-0 left-0 w-[45vw] h-[45vw] max-w-[600px] rounded-full bg-brand-gold-900/10 blur-[130px] pointer-events-none select-none" />
      <div className="absolute bottom-0 right-0 w-[45vw] h-[45vw] max-w-[600px] rounded-full bg-brand-blush-900/10 blur-[130px] pointer-events-none select-none" />

      <Container size="lg" padding="airy" className="relative z-10 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium bg-white/5 border border-white/10 text-brand-gold-300 shadow-luxury-glow select-none">
            ✨ AI Beauty Consultation
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight text-white leading-tight">
            Analyze Your Skin. <br />
            <span className="bg-gradient-to-r from-brand-gold-300 via-brand-blush-300 to-white bg-clip-text text-transparent font-medium">
              Formulate Your Routine.
            </span>
          </h2>
          <p className="text-sm md:text-base text-neutral-cream-300/80 leading-relaxed font-sans max-w-xl mx-auto">
            Take our bespoke diagnostic quiz to receive a comprehensive skin health evaluation and custom makeup suggestions.
          </p>
        </div>

        {/* Quiz Form Card */}
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-10 md:p-12 shadow-luxury-lg relative overflow-hidden">
          <form onSubmit={handleStartAnalysis} className="space-y-10">
            {/* Step 1: Personal Profile */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-medium text-brand-gold-300 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-brand-gold-400/30 text-xs font-sans">1</span>
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Full Name Input */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-xs uppercase tracking-widest text-neutral-cream-300">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-gold-400/50 focus:border-brand-gold-400 placeholder-white/20 transition-all duration-300 font-sans"
                  />
                </div>

                {/* Age Input */}
                <div className="space-y-2">
                  <label htmlFor="age" className="text-xs uppercase tracking-widest text-neutral-cream-300">
                    Age
                  </label>
                  <input
                    id="age"
                    type="number"
                    required
                    min="1"
                    max="120"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="e.g. 25"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-gold-400/50 focus:border-brand-gold-400 placeholder-white/20 transition-all duration-300 font-sans"
                  />
                </div>

                {/* Gender Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="gender" className="text-xs uppercase tracking-widest text-neutral-cream-300">
                    Gender
                  </label>
                  <div className="relative">
                    <select
                      id="gender"
                      required
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-gold-400/50 focus:border-brand-gold-400 transition-all duration-300 appearance-none font-sans cursor-pointer"
                    >
                      <option value="" disabled className="bg-neutral-obsidian-950 text-white/50">Select gender</option>
                      <option value="female" className="bg-neutral-obsidian-950 text-white">Female</option>
                      <option value="male" className="bg-neutral-obsidian-950 text-white">Male</option>
                      <option value="non-binary" className="bg-neutral-obsidian-950 text-white">Non-binary</option>
                      <option value="prefer-not-to-say" className="bg-neutral-obsidian-950 text-white">Prefer not to say</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-neutral-cream-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-white/10" />

            {/* Step 2: Skin Type Cards */}
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-serif font-medium text-brand-gold-300 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-brand-gold-400/30 text-xs font-sans">2</span>
                  Select Skin Type
                </h3>
                <p className="text-xs text-neutral-cream-400 font-sans ml-9">Choose the description that matches your skin best</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {skinTypes.map((type) => {
                  const isSelected = selectedSkinType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedSkinType(type.id)}
                      className={`text-left p-5 rounded-xl border transition-all duration-300 group cursor-pointer ${
                        isSelected
                          ? 'border-brand-gold-400 bg-brand-gold-950/20 shadow-luxury-glow'
                          : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-sm font-serif font-medium ${isSelected ? 'text-brand-gold-300' : 'text-white'}`}>
                          {type.label}
                        </span>
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                          isSelected ? 'border-brand-gold-400 bg-brand-gold-400' : 'border-white/30'
                        }`}>
                          {isSelected && (
                            <svg className="w-2.5 h-2.5 text-neutral-obsidian-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-cream-300/80 leading-relaxed font-sans">
                        {type.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <hr className="border-white/10" />

            {/* Step 3: Skin Concern Checkboxes */}
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-serif font-medium text-brand-gold-300 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-brand-gold-400/30 text-xs font-sans">3</span>
                  Primary Skin Concerns
                </h3>
                <p className="text-xs text-neutral-cream-400 font-sans ml-9">Select all that apply to guide targeted treatment suggestions</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                {skinConcerns.map((concern) => {
                  const isSelected = selectedConcerns.includes(concern.id);
                  return (
                    <button
                      key={concern.id}
                      type="button"
                      onClick={() => toggleSkinConcern(concern.id)}
                      className={`text-left p-4 rounded-xl border transition-all duration-300 group cursor-pointer ${
                        isSelected
                          ? 'border-brand-blush-400 bg-brand-blush-950/20 shadow-luxury-sm'
                          : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-serif font-medium tracking-wide ${isSelected ? 'text-brand-blush-300' : 'text-white'}`}>
                          {concern.label}
                        </span>
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                          isSelected ? 'border-brand-blush-400 bg-brand-blush-400' : 'border-white/30'
                        }`}>
                          {isSelected && (
                            <svg className="w-2.5 h-2.5 text-neutral-obsidian-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <p className="text-[10px] text-neutral-cream-400 leading-normal font-sans">
                        {concern.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <hr className="border-white/10" />

            {/* Step 4: Makeup Preference */}
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-serif font-medium text-brand-gold-300 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-brand-gold-400/30 text-xs font-sans">4</span>
                  Makeup Style Preference
                </h3>
                <p className="text-xs text-neutral-cream-400 font-sans ml-9">Select your signature cosmetic aesthetic preference</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {makeupPreferences.map((preference) => {
                  const isSelected = selectedPreference === preference.id;
                  return (
                    <button
                      key={preference.id}
                      type="button"
                      onClick={() => setSelectedPreference(preference.id)}
                      className={`text-left p-5 rounded-xl border transition-all duration-300 group cursor-pointer ${
                        isSelected
                          ? 'border-brand-gold-400 bg-brand-gold-950/20 shadow-luxury-glow'
                          : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                      }`}
                    >
                      <span className={`block text-sm font-serif font-medium mb-1 ${isSelected ? 'text-brand-gold-300' : 'text-white'}`}>
                        {preference.label}
                      </span>
                      <span className="block text-[11px] text-neutral-cream-400 font-sans">
                        {preference.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-8 text-center">
              <button
                type="submit"
                className="group relative px-10 py-5 bg-brand-gold-500 hover:bg-brand-gold-400 text-neutral-obsidian-950 font-sans font-semibold text-sm tracking-widest uppercase rounded-full shadow-[0_0_30px_-5px_rgba(194,149,85,0.45)] hover:shadow-[0_0_40px_rgba(194,149,85,0.65)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer inline-flex items-center justify-center gap-3 select-none"
              >
                <span>Start AI Beauty Analysis</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </form>

          {/* AI Simulation Scanning Overlay */}
          {isAnalyzing && (
            <div className="absolute inset-0 bg-neutral-obsidian-950/95 z-50 flex flex-col items-center justify-center p-8 backdrop-blur-md">
              {/* Laser Scanner animation container */}
              <div className="relative w-full max-w-[280px] aspect-[4/3] border border-brand-gold-500/30 rounded-xl overflow-hidden bg-neutral-obsidian-900 flex items-center justify-center">
                {/* Horizontal scanner beam line */}
                <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-gold-400 to-transparent shadow-[0_0_10px_#C29555] animate-scanner-line pointer-events-none" />
                
                {/* Face Scanning SVG Wireframe */}
                <svg viewBox="0 0 200 200" className="w-32 h-32 text-brand-gold-400/20">
                  <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" fill="none" />
                  <path d="M70,80 C70,110 80,140 100,140 C120,140 130,110 130,80" stroke="currentColor" strokeWidth="1" fill="none" />
                  <circle cx="85" cy="80" r="3" fill="currentColor" opacity="0.5" />
                  <circle cx="115" cy="80" r="3" fill="currentColor" opacity="0.5" />
                  <line x1="100" y1="50" x2="100" y2="150" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                  <line x1="50" y1="100" x2="150" y2="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                </svg>

                {/* Tech style indicators */}
                <div className="absolute top-2 left-2 text-[8px] font-mono text-brand-gold-400/50">CAM_FEED_01</div>
                <div className="absolute bottom-2 right-2 text-[8px] font-mono text-brand-gold-400/50">SECURE_DMAX</div>
              </div>

              {/* Progress and status */}
              <div className="w-full max-w-[320px] text-center mt-8 space-y-4">
                <p className="text-sm font-serif italic text-brand-gold-300 animate-pulse">
                  {analysisStep}
                </p>
                <div className="h-1.5 w-full bg-white/5 border border-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-brand-gold-400 transition-all duration-300 ease-out" 
                    style={{ width: `${analysisProgress}%` }}
                  />
                </div>
                <div className="text-[10px] text-neutral-cream-400 font-mono tracking-widest">
                  PROGRESS: {analysisProgress}%
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>

      {/* Floating Success Result Toast */}
      {showResultToast && (
        <div className="fixed bottom-8 right-8 z-50 bg-neutral-obsidian-900 border border-brand-gold-400 text-white rounded-xl p-5 shadow-luxury-glow max-w-sm">
          <div className="flex gap-4">
            <div className="text-brand-gold-400 text-xl pt-0.5">✨</div>
            <div className="space-y-1 flex-1">
              <h4 className="font-serif text-sm font-semibold text-brand-gold-300">
                AI Analysis Complete!
              </h4>
              <p className="text-[11px] text-neutral-cream-300 font-sans leading-relaxed">
                Dear {fullName}, your skin analysis results are ready. Your custom Beauty Passport recommendations have been generated!
              </p>
            </div>
            <button 
              onClick={() => setShowResultToast(false)} 
              className="text-neutral-cream-400 hover:text-white text-sm select-none cursor-pointer self-start"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BeautyQuizSection;
