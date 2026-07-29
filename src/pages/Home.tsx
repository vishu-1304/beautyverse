import React from 'react';
import Hero from '../sections/Hero';
import BeautyQuizSection from '../sections/BeautyQuizSection';
import FaceUploadSection from '../sections/FaceUploadSection';
import RecommendationSection from '../sections/RecommendationSection';
import BeautyJourney from '../sections/BeautyJourney';
import AIFeatures from '../sections/AIFeatures';
import FaceCanvasPreview from '../sections/FaceCanvasPreview';
import PassportPreview from '../sections/PassportPreview';
import GalleryPreview from '../sections/GalleryPreview';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <BeautyQuizSection />
      <FaceUploadSection />
      <RecommendationSection />
      <BeautyJourney />
      <AIFeatures />
      <FaceCanvasPreview />
      <PassportPreview />
      <GalleryPreview />
    </div>
  );
};

export default Home;

