import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const Navbar: React.FC = () => {
  const navItems = [
    { label: 'Home', path: ROUTES.HOME },
    { label: 'Explore', path: ROUTES.EXPLORE },
    { label: 'Quiz', path: ROUTES.QUIZ },
    { label: 'Recommendations', path: ROUTES.RECOMMENDATION },
    { label: 'Studio', path: ROUTES.STUDIO },
    { label: 'Passport', path: ROUTES.PASSPORT },
    { label: 'Gallery', path: ROUTES.GALLERY },
    { label: 'Profile', path: ROUTES.PROFILE },
    { label: 'About', path: ROUTES.ABOUT },
    { label: 'Contact', path: ROUTES.CONTACT },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to={ROUTES.HOME} className="text-xl font-bold text-gray-900 dark:text-white">
              ✨ BeautyVerse
            </NavLink>
          </div>
          <div className="hidden md:flex space-x-4 overflow-x-auto py-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-gray-100 dark:bg-gray-800 text-purple-600 dark:text-purple-400 font-semibold'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          {/* Mobile indicator or visual indicator for layout testing */}
          <div className="md:hidden">
            <span className="text-xs text-gray-500">Menu</span>
          </div>
        </div>
        {/* Horizontal scroll navigation for smaller screens to access all pages */}
        <div className="flex md:hidden space-x-2 overflow-x-auto pb-3 pt-1 border-t border-gray-100 dark:border-gray-800">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-gray-100 dark:bg-gray-800 text-purple-600 dark:text-purple-400 font-semibold'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
