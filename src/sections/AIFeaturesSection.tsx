import React from 'react';
import Container from '../components/ui/Container';

// Feature Item definition
interface FeatureItem {
  title: string;
  description: string;
  points: string[];
  icon: React.ReactNode;
}

export const AIFeaturesSection: React.FC = () => {
  const features: FeatureItem[] = [
    {
      title: 'AI Face Analysis',
      description: 'Hyper-precise computer vision diagnostics map structural landmarks and dermatological patterns to unlock your skin\'s biological blueprint.',
      points: ['Skin texture detection', 'Face symmetry', 'Tone mapping'],
      icon: (
        <svg className="w-8 h-8 text-[#C89B4A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Target Reticle Corners */}
          <path d="M4 8V5c0-1.1.9-2 2-2h3M20 8V5c0-1.1-.9-2-2-2h-3M4 16v3c0 1.1.9 2 2 2h3M20 16v3c0 1.1-.9 2-2 2h-3" strokeLinecap="round" strokeLinejoin="round" />
          {/* Face scan mask representation */}
          <path d="M12 7c-2.5 0-4.5 2-4.5 4.5s1.8 4 3.5 4.8l1 1.2c.2.2.5.2.7 0l1-1.2c1.7-.8 3.5-2.3 3.5-4.8C16.5 9 14.5 7 12 7z" strokeLinecap="round" strokeLinejoin="round" />
          {/* Facial structure lines */}
          <path d="M9 11h6M12 7v5M9.5 14c1.2 1 3.8 1 5 0" strokeLinecap="round" strokeLinejoin="round" />
          {/* Scanning Beam */}
          <line x1="3" y1="12" x2="21" y2="12" stroke="#C89B4A" strokeWidth="1" strokeDasharray="3 3" className="animate-pulse" />
        </svg>
      )
    },
    {
      title: 'Smart Product Recommendation',
      description: 'Bespoke matchmaking engine compares cosmetic compositions with your biological profile for zero-risk, clinical-grade results.',
      points: ['Personalized skincare', 'Makeup matching', 'Ingredient analysis'],
      icon: (
        <svg className="w-8 h-8 text-[#C89B4A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Serum/Cosmetics luxury bottle */}
          <path d="M9 7V5c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4v7c0 1.7-1.3 3-3 3h-2c-1.7 0-3-1.3-3-3v-7z" strokeLinecap="round" strokeLinejoin="round" />
          {/* Cap details */}
          <path d="M8 7h8v2H8z" strokeLinecap="round" strokeLinejoin="round" />
          {/* Droplet inside bottle / Formula */}
          <path d="M12 11c-.8 1-1.5 1.8-1.5 2.5a1.5 1.5 0 0 0 3 0c0-.7-.7-1.5-1.5-2.5z" fill="#C89B4A" fillOpacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
          {/* Luxury sparkles */}
          <path d="M5 6l1.2 1.2M6 5l-1.2 1.2M19 6l1.2 1.2M20 5l-1.2 1.2M18.5 16.5l.8.8M19.3 15.7l-.8.8" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: 'Virtual Makeup Studio',
      description: 'Real-time augmented reality rendering simulates luxury pigments and textures directly on your skin under dynamic, adaptive studio lighting.',
      points: ['Live lipstick preview', 'Eyeshadow simulation', 'Foundation matching'],
      icon: (
        <svg className="w-8 h-8 text-[#C89B4A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Professional makeup brush */}
          <path d="M18.5 5.5l-13 13M19.5 4.5c.7.7.7 1.8 0 2.5l-1.5 1.5-2.5-2.5 1.5-1.5c.7-.7 1.8-.7 2.5 0z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.5 6l3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Sweep dust / sparkles representing virtual cosmetics */}
          <path d="M4 14c2-1 4-1 5 .5s1 4 .5 5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="3" cy="18" r="1" fill="#C89B4A" />
          <circle cx="7" cy="13" r="1" fill="#C89B4A" />
          <circle cx="10" cy="17" r="1.5" fill="#C89B4A" />
        </svg>
      )
    },
    {
      title: 'Beauty Passport',
      description: 'A premium encrypted digital vault that aggregates your skin evolution history, daily wellness metrics, and bespoke application schedules.',
      points: ['AI beauty profile', 'Skin history', 'Personalized routine'],
      icon: (
        <svg className="w-8 h-8 text-[#C89B4A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Passport Booklet outline */}
          <rect x="5" y="3" width="14" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Spine and card detail */}
          <path d="M8 3v18" strokeLinecap="round" strokeLinejoin="round" />
          {/* Custom crest or globe */}
          <circle cx="13.5" cy="10.5" r="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 10.5h5M13.5 8v5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Digital chip detail */}
          <rect x="11.5" y="16" width="4" height="3" rx="0.5" fill="#C89B4A" fillOpacity="0.2" />
        </svg>
      )
    },
    {
      title: 'Community Inspiration',
      description: 'Curated social registry of personalized looks. Share your AI predictions, discover global trends, and bookmark curated aesthetic folders.',
      points: ['Save looks', 'Share styles', 'Beauty gallery'],
      icon: (
        <svg className="w-8 h-8 text-[#C89B4A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Group nodes / interlocking circles */}
          <path d="M12 14.5c3 0 5-1.5 5-3.5V7c0-2-2-3.5-5-3.5S7 5 7 7v4c0 2 2 3.5 5 3.5z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 19c0-2.5 3-4 6-4s6 1.5 6 4" strokeLinecap="round" strokeLinejoin="round" />
          {/* Heart icon of inspiration */}
          <path d="M20.5 8.2a2.2 2.2 0 0 0-3 0l-.5.5-.5-.5a2.2 2.2 0 0 0-3 3l3.5 3.5 3.5-3.5a2.2 2.2 0 0 0 0-3z" fill="#C89B4A" fillOpacity="0.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: 'Secure AI Processing',
      description: 'Military-grade data protection running localized edge-diagnostics ensures your biometric photographs and data remain entirely your own.',
      points: ['Private image processing', 'Encrypted profile', 'Secure cloud storage'],
      icon: (
        <svg className="w-8 h-8 text-[#C89B4A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Shield */}
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
          {/* Lock inside shield */}
          <rect x="9.5" y="11" width="5" height="4" rx="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10.5 11V9.5a1.5 1.5 0 0 1 3 0V11" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  const handleStartAnalysis = () => {
    const element = document.getElementById('face-upload-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 800, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#0B0B0B] text-white">
      {/* Luxury CSS animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes rotating-glow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-border-spin {
          animation: rotating-glow 4s linear infinite;
        }
        .bg-grid-gold-pattern {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(200, 155, 74, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(200, 155, 74, 0.03) 1px, transparent 1px);
        }
      `}} />

      {/* Atmospheric Glowing Orbs */}
      <div className="absolute top-1/4 left-1/10 w-[35vw] h-[35vw] rounded-full bg-[#C89B4A]/5 blur-[120px] pointer-events-none select-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[40vw] h-[40vw] rounded-full bg-[#C89B4A]/5 blur-[140px] pointer-events-none select-none" />
      
      {/* Gold Grid Overlay */}
      <div className="absolute inset-0 bg-grid-gold-pattern pointer-events-none opacity-40" />

      <Container size="xl" padding="airy" className="relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-sans tracking-[0.15em] font-medium bg-[#C89B4A]/10 border border-[#C89B4A]/25 text-[#C89B4A] shadow-[0_0_15px_rgba(200,155,74,0.1)] animate-pulse">
            ✨ WHY BEAUTYVERSE AI
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight text-white leading-tight">
            Advanced AI <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#C89B4A] via-white to-[#C89B4A] bg-clip-text text-transparent font-medium">
              Beauty Intelligence
            </span>
          </h2>
          
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Our AI combines facial analysis, personalized skincare recommendations, virtual makeup previews, and biometric beauty passports into one seamless luxury beauty experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group relative rounded-2xl p-[1px] overflow-hidden bg-white/[0.06] border border-white/5 transition-all duration-500 hover:border-transparent hover:shadow-[0_0_30px_rgba(200,155,74,0.12)] h-full"
            >
              {/* Luxury Rotating Gold Conic Border on Hover */}
              <div className="absolute -inset-[20%] bg-[conic-gradient(from_0deg,transparent_35%,#C89B4A_50%,transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 animate-border-spin" />

              {/* Card Inner Content Container */}
              <div className="relative bg-[#0F0F0F]/95 backdrop-blur-xl rounded-[15px] p-6 md:p-8 h-full flex flex-col justify-between z-10 overflow-hidden">
                {/* Radial Glow from top on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,155,74,0.1),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="space-y-6">
                  {/* Icon Header */}
                  <div className="w-14 h-14 rounded-xl bg-white/[0.03] border border-white/[0.07] flex items-center justify-center group-hover:border-[#C89B4A]/30 group-hover:bg-[#C89B4A]/5 transition-all duration-500">
                    {feature.icon}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif font-medium text-white group-hover:text-[#C89B4A] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-sans">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Sub Features Bullet list */}
                <div className="mt-6 pt-6 border-t border-white/[0.05] space-y-2.5">
                  {feature.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#C89B4A]" />
                      <span className="text-xs text-neutral-300 font-sans tracking-wide">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="relative rounded-3xl p-[1px] overflow-hidden bg-gradient-to-r from-white/10 via-[#C89B4A]/30 to-white/10 max-w-4xl mx-auto">
          <div className="relative bg-[#0E0E0E] rounded-[23px] px-8 py-12 md:py-16 text-center space-y-8 overflow-hidden z-10">
            {/* CTA Background Radial Blur */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,155,74,0.06),transparent_70%)] pointer-events-none" />
            
            <div className="space-y-3 max-w-xl mx-auto">
              <h3 className="text-2xl md:text-4xl font-serif font-light tracking-tight text-white leading-tight">
                Ready to discover your <span className="text-[#C89B4A] font-medium">best look?</span>
              </h3>
              <p className="text-neutral-400 text-xs md:text-sm max-w-md mx-auto">
                Begin your luxury beauty evolution. Upload your photo and let our intelligence network calculate your profile.
              </p>
            </div>

            <div>
              <button 
                onClick={handleStartAnalysis}
                type="button"
                className="group relative px-8 py-4 bg-[#C89B4A] hover:bg-[#D4A85B] text-black font-sans font-semibold rounded-full shadow-[0_0_30px_rgba(200,155,74,0.3)] hover:shadow-[0_0_40px_rgba(200,155,74,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer inline-flex items-center justify-center gap-2 select-none text-sm"
              >
                <span>Start AI Analysis</span>
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default AIFeaturesSection;
