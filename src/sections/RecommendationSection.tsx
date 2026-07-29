import React, { useState } from 'react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Define structures for our data
interface SkinMetric {
  name: string;
  value: number;
  description: string;
  colorClass: string;
}

interface RoutineStep {
  step: string;
  name: string;
  desc: string;
}

interface MakeupItem {
  name: string;
  shade: string;
  finish: string;
  match: string;
  color: string;
  desc: string;
}

interface SkinProfile {
  id: string;
  label: string;
  overallScore: number;
  summary: string;
  metrics: SkinMetric[];
  morningRoutine: RoutineStep[];
  nightRoutine: RoutineStep[];
  makeup: MakeupItem[];
  tips: string[];
}

const SKIN_PROFILES: SkinProfile[] = [
  {
    id: 'luminous',
    label: 'Luminous Hydration',
    overallScore: 84,
    summary: 'Biometric analysis indicates a healthy lipid layer with slight dehydration in the cheek zones. Focus on locking in hydration and maintaining barrier integrity.',
    metrics: [
      { name: 'Hydration Level', value: 86, description: 'Optimal moisture retention in T-zone, dry patches on cheeks.', colorClass: 'bg-brand-gold-400' },
      { name: 'Barrier Strength', value: 78, description: 'Slight sensitivity detected around the nasal folds.', colorClass: 'bg-brand-blush-400' },
      { name: 'Texture Uniformity', value: 82, description: 'Generally smooth texture, minor congestion under chin.', colorClass: 'bg-brand-gold-300' },
      { name: 'Radiance Index', value: 90, description: 'Excellent skin luminosity and natural cell turnover.', colorClass: 'bg-brand-blush-300' }
    ],
    morningRoutine: [
      { step: '01', name: 'Phyto-Cleanse Foaming Gel', desc: 'Purifies the skin surface without stripping the vital moisture barrier.' },
      { step: '02', name: 'Hyaluronic-Matrix Serum', desc: 'Injects multi-weight hyaluronic acid for immediate deep plumping.' },
      { step: '03', name: 'Aqua-Peptide Luxury Cream', desc: 'Locks in moisture and stimulates collagen pathways for firmness.' },
      { step: '04', name: 'Invisible Shield SPF 50', desc: 'Dewy-finish chemical filter shielding against UV-induced collagen breakdown.' }
    ],
    nightRoutine: [
      { step: '01', name: 'Centella Cleansing Oil', desc: 'Deeply dissolves sebum, heavy makeup, and accumulated SPF filters.' },
      { step: '02', name: 'B5 Restorative Soothing Gel', desc: 'Intensely calms skin cells, reducing minor redness and inflammation.' },
      { step: '03', name: 'Squalane Recovery Oil', desc: 'Enriches the outer epidermis with lightweight, non-comedogenic lipids.' },
      { step: '04', name: 'Ceramide Night Renewal Cream', desc: 'Fortifies the cellular skin envelope while cells undergo night repair.' }
    ],
    makeup: [
      { name: 'Foundation', shade: 'Warm Alabaster / Dior 1W', finish: 'Satin Glow', match: '98.2%', color: '#f7edd8', desc: 'Neutralizes slight cheek redness while blending with warm undertones.' },
      { name: 'Lipstick', shade: 'Dusty Rosewood / Rare Beauty 04', finish: 'Velvet Matte', match: '96.4%', color: '#c48991', desc: 'Enhances natural lip pigment and brings warmth to your complexion.' },
      { name: 'Blush', shade: 'Soft Terracotta / Merit Balm', finish: 'Dewy Cream', match: '95.7%', color: '#b87579', desc: 'Blends seamlessly for a natural contour lift and sun-kissed warmth.' },
      { name: 'Highlighter', shade: 'Champagne Dew / Hourglass Liquid', finish: 'Wet Glaze', match: '97.5%', color: '#ebd0d1', desc: 'Refracts light beautifully on upper cheekbones and brow arches.' }
    ],
    tips: [
      'Layering Rule: Always apply skincare products from thinnest consistency to thickest (watery serums before thick creams).',
      'Damp Skin Application: Apply your Hyaluronic-Matrix Serum onto slightly damp skin to maximize water retention and plumping effects.',
      'Sun Protection: Never skip daily SPF, as UV light degrades peptide bonds and accelerates skin dehydration.'
    ]
  },
  {
    id: 'pore-refine',
    label: 'Pore Refinement & Calming',
    overallScore: 76,
    summary: 'Biometric analysis highlights slightly elevated sebum production in the T-zone and minimal texture irregularities. Prioritize gentle pore exfoliation and anti-inflammatory care.',
    metrics: [
      { name: 'Hydration Level', value: 72, description: 'Moderate moisture with excess oil production in central zones.', colorClass: 'bg-brand-gold-400' },
      { name: 'Barrier Strength', value: 84, description: 'Strong cellular resistance with low sensitivity indicators.', colorClass: 'bg-brand-blush-400' },
      { name: 'Texture Uniformity', value: 68, description: 'Minor pore dilation and active sebaceous filaments.', colorClass: 'bg-brand-gold-300' },
      { name: 'Radiance Index', value: 74, description: 'Healthy skin tone, slight surface dullness due to congestion.', colorClass: 'bg-brand-blush-300' }
    ],
    morningRoutine: [
      { step: '01', name: 'Salicylic Acid Clarifying Wash', desc: 'Gently exfoliates inner pore lining to clear excess sebum buildup.' },
      { step: '02', name: 'Zinc PCA Niacinamide Serum', desc: 'Regulates sebum gland activity and visibly refines dilated pores.' },
      { step: '03', name: 'Squalane Matte Lotion', desc: 'Provides oil-free weightless hydration with a silky velvet finish.' },
      { step: '04', name: 'Mineral Fluid SPF 50', desc: 'Non-comedogenic physical filter shielding skin with a dry-touch finish.' }
    ],
    nightRoutine: [
      { step: '01', name: 'Micellar Hydrating Water', desc: 'Gently sweeps away micro-particles and oils without water irritation.' },
      { step: '02', name: 'Beta-Hydroxy Acid 2% Liquid', desc: 'Penetrates deeply to clear blackheads and prevent overnight congestion.' },
      { step: '03', name: 'Cica Recovery Gel', desc: 'Calms redness, speeds up healing of skin blemishes, and hydrates.' },
      { step: '04', name: 'Pore-Clarifying Night Emulsion', desc: 'Aids skin cell regeneration while tightening and smoothing skin texture.' }
    ],
    makeup: [
      { name: 'Foundation', shade: 'Neutral Ivory / Fenty 140', finish: 'Soft Matte', match: '97.1%', color: '#f2e0c9', desc: 'Oil-controlling pigments that blur pores and prevent afternoon shine.' },
      { name: 'Lipstick', shade: 'Petal Pink / Mac Lustreglass', finish: 'Sheer Satin', match: '94.2%', color: '#df838f', desc: 'A light, sheer pigment that complements a fresh, clean face aesthetic.' },
      { name: 'Blush', shade: 'Cool Mauve / Rare Beauty Liquid', finish: 'Soft Focus', match: '95.3%', color: '#a6727d', desc: 'Adds a soft flush of color without drawing attention to skin texture.' },
      { name: 'Highlighter', shade: 'Opal Sheen / Hourglass Powder', finish: 'Micro-Shimmer', match: '93.8%', color: '#e8d7cd', desc: 'Refined mineral powder that gives a glow without emphasizing pores.' }
    ],
    tips: [
      'BHA Timing: Let your BHA liquid absorb fully for 3-5 minutes before layering hydration to ensure active acids work effectively.',
      'Minimize Friction: Pat your skincare products onto your skin rather than rubbing to prevent vascular redness.',
      'Clay Spotting: Use a kaolin clay mask once a week on the T-zone only to absorb stubborn oil deposits.'
    ]
  },
  {
    id: 'youthful',
    label: 'Youthful Radiance & Firming',
    overallScore: 81,
    summary: 'Biometric analysis suggests excellent skin structure with a slight slow down in cell renewal. Nourish the skin with powerful peptides, retinoids, and antioxidants.',
    metrics: [
      { name: 'Hydration Level', value: 80, description: 'Stable hydration, but requires lipid support to prevent trans-epidermal water loss.', colorClass: 'bg-brand-gold-400' },
      { name: 'Barrier Strength', value: 75, description: 'Vulnerable to seasonal changes, needs peptide scaffolding.', colorClass: 'bg-brand-blush-400' },
      { name: 'Texture Uniformity', value: 85, description: 'Highly uniform surface, minor fine lines around orbital bones.', colorClass: 'bg-brand-gold-300' },
      { name: 'Radiance Index', value: 82, description: 'Good natural luminosity, minor dark spots on forehead.', colorClass: 'bg-brand-blush-300' }
    ],
    morningRoutine: [
      { step: '01', name: 'Amino Acid Milky Cleanser', desc: 'Soothes and cleanses with a creamy, lipid-rich formula.' },
      { step: '02', name: 'Vitamin C + Ferulic Acid', desc: 'Neutralizes free radicals and brightens hyperpigmentation.' },
      { step: '03', name: 'Cellular Peptide Cream', desc: 'Stimulates elastin production, smoothing out micro-wrinkles.' },
      { step: '04', name: 'Wrinkle Defense SPF 45', desc: 'Premium broad-spectrum protection enriched with photo-aging blockades.' }
    ],
    nightRoutine: [
      { step: '01', name: 'Nourishing Cleansing Balm', desc: 'Rich emollient balm that melts away dirt and replenishes lipids.' },
      { step: '02', name: 'Granactive Retinoid 2% Serum', desc: 'Accelerates cellular renewal and collagen synthesis without irritation.' },
      { step: '03', name: 'CoQ10 Revitalizing Oil', desc: 'Energizes mitochondrial repair in skin cells to restore firmness.' },
      { step: '04', name: 'Multi-Peptide Overnight Balm', desc: 'Deeply conditions and supports structural integrity during sleep.' }
    ],
    makeup: [
      { name: 'Foundation', shade: 'Medium Warm / Armani Luminous 5.5', finish: 'Luminous Satin', match: '96.8%', color: '#e6cbb0', desc: 'Lightweight fluid that bounces light to diminish the appearance of fine lines.' },
      { name: 'Lipstick', shade: 'Rich Berry / Chanel Coco Gloss', finish: 'High Shine Gloss', match: '95.5%', color: '#8c4e58', desc: 'Brings intense hydration and plumping sheen to define lip contour.' },
      { name: 'Blush', shade: 'Warm Peach / Nars Liquid', finish: 'Luminous Flush', match: '96.2%', color: '#e59393', desc: 'A warm peach flush with micro-gold specks for an instant cheek lift.' },
      { name: 'Highlighter', shade: 'Gold Lustre / Tilbury Glow', finish: 'Lit-From-Within', match: '98.1%', color: '#d3a579', desc: 'High-adhesion liquid gold pigment that mimics youthful, hydrated skin dew.' }
    ],
    tips: [
      'Retinoid Dryness: Ensure your skin is completely dry before applying retinoids to prevent depth penetration that leads to flaking.',
      'Neck Extension: Always sweep your anti-aging serums and moisturizers down onto the neck and decolletage.',
      'Antioxidant Pairing: Vitamin C and Sunscreen work synergistically to provide double the protection against UV damage.'
    ]
  }
];

export const RecommendationSection: React.FC = () => {
  const [activeProfileId, setActiveProfileId] = useState<string>('luminous');

  const activeProfile = SKIN_PROFILES.find((p) => p.id === activeProfileId) || SKIN_PROFILES[0];

  // Circle path math for SVG Score dial
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (activeProfile.overallScore / 100) * circumference;

  return (
    <section className="relative w-full overflow-hidden bg-neutral-obsidian-950 text-white py-24 md:py-32 border-b border-white/5 font-sans">
      {/* Background luxury lights */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[40vw] h-[40vw] max-w-[600px] rounded-full bg-brand-gold-900/10 blur-[130px] pointer-events-none select-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[35vw] h-[35vw] max-w-[500px] rounded-full bg-brand-blush-900/10 blur-[120px] pointer-events-none select-none" />

      <Container size="xl" padding="airy" className="relative z-10 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium bg-white/5 border border-white/10 text-brand-gold-300 shadow-luxury-sm select-none">
            ✨ AI Prescriptions & Matches
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-white leading-tight">
            Your Tailored Beauty Regimen
          </h2>
          <p className="text-sm md:text-base text-neutral-cream-300/80 leading-relaxed font-sans max-w-xl mx-auto">
            Biometric analysis compiled. Toggle between skin goal presets below to customize your AI-recommended routines and cosmetic coordinates.
          </p>
        </div>

        {/* Premium Goal Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 max-w-2xl mx-auto font-sans">
          {SKIN_PROFILES.map((profile) => {
            const isActive = profile.id === activeProfileId;
            return (
              <button
                key={profile.id}
                onClick={() => setActiveProfileId(profile.id)}
                className={`px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ease-out border cursor-pointer active:scale-95 ${
                  isActive
                    ? 'bg-brand-gold-500 border-brand-gold-400 text-neutral-obsidian-950 shadow-luxury-glow'
                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10 text-neutral-cream-200'
                }`}
              >
                {profile.label}
              </button>
            );
          })}
        </div>

        {/* SECTION 1: AI Skin Health Score Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20">
          {/* Left: Overall Circular Dial */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-8 bg-neutral-obsidian-900/40 border border-white/5 rounded-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none" />
            
            <h3 className="text-sm font-serif uppercase tracking-[0.18em] text-brand-gold-400 mb-6">
              AI Skin Health Score
            </h3>
            
            {/* SVG Circular Progress */}
            <div className="relative w-36 h-36 flex items-center justify-center mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                {/* Background Ring */}
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  className="stroke-neutral-obsidian-800"
                  strokeWidth="6"
                  fill="transparent"
                />
                {/* Gradient Ring */}
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  stroke="url(#score-gradient)"
                  strokeWidth="7"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
                <defs>
                  <linearGradient id="score-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-brand-gold-300)" />
                    <stop offset="100%" stopColor="var(--color-brand-blush-400)" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Central Text */}
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-4xl font-light font-serif tracking-tight text-white">
                  {activeProfile.overallScore}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-cream-400 font-semibold">
                  / 100
                </span>
              </div>
            </div>

            <div className="space-y-2 relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase font-semibold bg-white/5 border border-white/10 text-brand-blush-300">
                🟢 Optimal Condition
              </span>
              <p className="text-xs text-neutral-cream-300/80 leading-relaxed font-sans mt-2">
                {activeProfile.summary}
              </p>
            </div>
          </div>

          {/* Right: Detailed Metric Progress Bars */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-lg font-serif font-light text-white tracking-wide border-b border-white/5 pb-3">
              Dermal Metric Spectrometry
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeProfile.metrics.map((metric, i) => (
                <div key={i} className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-neutral-cream-100">
                    <span>{metric.name}</span>
                    <span className="text-brand-gold-300">{metric.value}%</span>
                  </div>
                  {/* Progress track */}
                  <div className="w-full h-1.5 bg-neutral-obsidian-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${metric.colorClass}`}
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-neutral-cream-400/90 leading-normal font-sans">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 2: Skincare Routines (Morning & Night) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* MORNING CARD */}
          <Card
            variant="glass"
            bgIntensity="dark"
            shape="pill-box"
            hoverEffect="glow"
            className="flex flex-col h-full bg-neutral-obsidian-900/40 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <Card.Header className="flex flex-row items-center justify-between border-b border-white/5 pb-6">
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold-400 font-semibold">
                  Daytime Defense
                </span>
                <h3 className="text-2xl font-serif font-light text-white tracking-wide flex items-center gap-2.5">
                  🌅 Morning Skincare
                </h3>
              </div>
              <span className="text-xs text-neutral-cream-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                4 Steps
              </span>
            </Card.Header>

            <Card.Body className="space-y-6 pt-6 flex-1">
              {activeProfile.morningRoutine.map((step) => (
                <div key={step.step} className="flex gap-4 items-start group">
                  <span className="text-xs font-serif font-bold text-brand-gold-400 border border-brand-gold-500/20 bg-brand-gold-950/20 rounded-md w-8 h-8 flex items-center justify-center shrink-0 group-hover:bg-brand-gold-500 group-hover:text-neutral-obsidian-950 transition-colors">
                    {step.step}
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-white font-sans tracking-wide">
                      {step.name}
                    </h4>
                    <p className="text-xs text-neutral-cream-300/85 leading-relaxed font-sans">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </Card.Body>
          </Card>

          {/* NIGHT CARD */}
          <Card
            variant="glass"
            bgIntensity="dark"
            shape="pill-box"
            hoverEffect="glow"
            className="flex flex-col h-full bg-neutral-obsidian-900/40 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blush-500/5 rounded-full blur-2xl pointer-events-none" />

            <Card.Header className="flex flex-row items-center justify-between border-b border-white/5 pb-6">
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-blush-400 font-semibold">
                  Nighttime Repair
                </span>
                <h3 className="text-2xl font-serif font-light text-white tracking-wide flex items-center gap-2.5">
                  🌙 Night Skincare
                </h3>
              </div>
              <span className="text-xs text-neutral-cream-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                4 Steps
              </span>
            </Card.Header>

            <Card.Body className="space-y-6 pt-6 flex-1">
              {activeProfile.nightRoutine.map((step) => (
                <div key={step.step} className="flex gap-4 items-start group">
                  <span className="text-xs font-serif font-bold text-brand-blush-400 border border-brand-blush-500/20 bg-brand-blush-950/20 rounded-md w-8 h-8 flex items-center justify-center shrink-0 group-hover:bg-brand-blush-500 group-hover:text-white transition-colors">
                    {step.step}
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-white font-sans tracking-wide">
                      {step.name}
                    </h4>
                    <p className="text-xs text-neutral-cream-300/85 leading-relaxed font-sans">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </Card.Body>
          </Card>
        </div>

        {/* SECTION 3: Makeup Recommendation Cards */}
        <div className="space-y-8 mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-4">
            <div>
              <span className="text-xs uppercase tracking-[0.18em] text-brand-gold-400 font-serif">
                Cosmetic Matching
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-light text-white tracking-wide mt-1">
                AI Makeup Shade Matches
              </h3>
            </div>
            <p className="text-xs text-neutral-cream-400 font-sans max-w-md md:text-right">
              Derived color palette matching your spectral skin tone. Click individual shade coordinates below to view details.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeProfile.makeup.map((item, i) => (
              <Card
                key={i}
                variant="bordered"
                bgIntensity="dark"
                shape="comfort"
                hoverEffect="lift"
                className="bg-neutral-obsidian-900/30 border-white/5 hover:border-brand-gold-500/30 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Category & Match Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-semibold text-neutral-cream-400 tracking-wider">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-semibold text-brand-gold-300 px-2 py-0.5 rounded bg-brand-gold-950/20 border border-brand-gold-500/10">
                      {item.match} Match
                    </span>
                  </div>

                  {/* Swatch & Title */}
                  <div className="flex items-center gap-3.5 pt-2">
                    <div
                      className="w-10 h-10 rounded-full border border-white/10 shadow-lg shrink-0 relative group-hover:scale-105 transition-transform duration-300"
                      style={{ backgroundColor: item.color }}
                    >
                      <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <h4 className="text-sm font-semibold text-white truncate font-sans">
                        {item.shade.split(' / ')[0]}
                      </h4>
                      <p className="text-[11px] text-neutral-cream-400 font-sans truncate">
                        {item.shade.split(' / ')[1] || item.finish}
                      </p>
                    </div>
                  </div>

                  {/* Detail */}
                  <p className="text-xs text-neutral-cream-300/80 leading-relaxed font-sans pt-2">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6">
                  <Button
                    variant="shimmer"
                    intent="accent"
                    size="sm"
                    shape="pill"
                    className="w-full text-xs font-semibold py-2.5 uppercase tracking-wider text-neutral-obsidian-950"
                  >
                    View Product Match
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* SECTION 4: Premium AI Tips */}
        <div className="relative rounded-2xl border border-brand-gold-500/20 bg-neutral-obsidian-900/50 p-8 md:p-10 shadow-luxury-glow overflow-hidden group">
          {/* Subtle gold spotlight */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-gold-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl font-sans">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase font-semibold bg-brand-gold-500/10 border border-brand-gold-500/20 text-brand-gold-300">
                💡 AI Luxury Protocol
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-light text-white tracking-wide">
                Skin-Layering Best Practices
              </h3>
              <p className="text-xs md:text-sm text-neutral-cream-300/80 leading-relaxed font-sans">
                Follow these curated clinical guidelines compiled by our beauty AI team to maximize ingredient synthesis and achieve editorial-grade results.
              </p>
            </div>

            <div className="w-full md:w-auto shrink-0 md:max-w-md lg:max-w-lg space-y-4">
              {activeProfile.tips.map((tip, idx) => (
                <div key={idx} className="flex gap-3 items-start text-xs font-sans text-neutral-cream-200">
                  <span className="text-brand-gold-400 font-semibold shrink-0 mt-0.5">✦</span>
                  <p className="leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RecommendationSection;
