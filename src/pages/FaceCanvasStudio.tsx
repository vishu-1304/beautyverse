import React from 'react';

const FaceCanvasStudio: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Face Canvas Studio</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
        A dynamic virtual makeover and product trial environment (3D and AR features coming soon).
      </p>
    </div>
  );
};

export default FaceCanvasStudio;
