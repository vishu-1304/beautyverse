import React from 'react';

const Gallery: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Gallery</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
        Explore a showcase of stunning looks created, saved, and shared by the BeautyVerse community.
      </p>
    </div>
  );
};

export default Gallery;
