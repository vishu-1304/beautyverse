import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start">
          <Link to={ROUTES.HOME} className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            ✨ BeautyVerse
          </Link>
          <p className="text-sm text-gray-500">
            &copy; {currentYear} BeautyVerse. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
          <Link to={ROUTES.ABOUT} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            About
          </Link>
          <Link to={ROUTES.CONTACT} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            Contact
          </Link>
          <Link to={ROUTES.EXPLORE} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            Explore
          </Link>
          <Link to={ROUTES.QUIZ} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            Quiz
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
