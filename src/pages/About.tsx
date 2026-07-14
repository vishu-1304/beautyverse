import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About BeautyVerse</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
        BeautyVerse is dedicated to revolutionizing skincare and cosmetic discovery through smart recommendations and interactive technology.
      </p>
    </div>
  );
};

export default About;
