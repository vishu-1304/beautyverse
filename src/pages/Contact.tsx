import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
        Have questions, feedback, or suggestions? Feel free to reach out to our team at support@beautyverse.com.
      </p>
    </div>
  );
};

export default Contact;
