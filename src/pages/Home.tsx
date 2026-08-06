import React, { useState } from 'react';
import Hero from '../sections/Hero';
import BeautyQuizSection from '../sections/BeautyQuizSection';
import FaceUploadSection from '../sections/FaceUploadSection';
import AnalysisHistorySection from '../sections/AnalysisHistorySection';
import RecommendationSection from '../sections/RecommendationSection';
import BeautyPassportSection from '../sections/BeautyPassportSection';
import VirtualMakeupStudio from '../sections/VirtualMakeupStudio';
import CommunityGallerySection from '../sections/CommunityGallerySection';
import AIFeaturesSection from '../sections/AIFeaturesSection';
import BeautyJourney from '../sections/BeautyJourney';
import AIFeatures from '../sections/AIFeatures';
import FaceCanvasPreview from '../sections/FaceCanvasPreview';
import PassportPreview from '../sections/PassportPreview';
import GalleryPreview from '../sections/GalleryPreview';

const Home: React.FC = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <BeautyQuizSection />
      <FaceUploadSection onAnalysisComplete={() => setRefreshTrigger(prev => prev + 1)} />
      <AnalysisHistorySection refreshTrigger={refreshTrigger} />
      <RecommendationSection />
      <BeautyPassportSection />
      <VirtualMakeupStudio />
      <CommunityGallerySection />
      <AIFeaturesSection />
      <BeautyJourney />
      <AIFeatures />
      <FaceCanvasPreview />
      <PassportPreview />
      <GalleryPreview />
    </div>
  );
};

export default Home;


