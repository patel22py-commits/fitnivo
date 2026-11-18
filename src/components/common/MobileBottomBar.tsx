import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Heart, Apple, Dumbbell, Search, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface MobileBottomBarProps {
  onOpenSearch: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenSearch }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      aria-label="Mobile Navigation"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-brand-darkBg/95 backdrop-blur-lg border-t border-brand-sage-200/80 dark:border-brand-sage-800/80 px-2 py-1.5 shadow-lg pb-[env(safe-area-inset-bottom,8px)]"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-[10px] font-semibold transition-colors ${
              isActive
                ? 'text-brand-lightPrimary dark:text-brand-darkPrimary'
                : 'text-brand-sage-600 dark:text-brand-darkMuted hover:text-brand-lightPrimary'
            }`
          }
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span>Home</span>
        </NavLink>

        {/* Health */}
        <NavLink
          to="/womens-health"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-[10px] font-semibold transition-colors ${
              isActive
                ? 'text-brand-lightPrimary dark:text-brand-darkPrimary'
                : 'text-brand-sage-600 dark:text-brand-darkMuted hover:text-brand-lightPrimary'
            }`
          }
        >
          <Heart className="w-5 h-5 mb-0.5" />
          <span>Health</span>
        </NavLink>

        {/* Nutrition */}
        <NavLink
          to="/nutrition"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-[10px] font-semibold transition-colors ${
              isActive
                ? 'text-brand-lightPrimary dark:text-brand-darkPrimary'
                : 'text-brand-sage-600 dark:text-brand-darkMuted hover:text-brand-lightPrimary'
            }`
          }
        >
          <Apple className="w-5 h-5 mb-0.5" />
          <span>Nutrition</span>
        </NavLink>

        {/* Fitness */}
        <NavLink
          to="/fitness"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-[10px] font-semibold transition-colors ${
              isActive
                ? 'text-brand-lightPrimary dark:text-brand-darkPrimary'
                : 'text-brand-sage-600 dark:text-brand-darkMuted hover:text-brand-lightPrimary'
            }`
          }
        >
          <Dumbbell className="w-5 h-5 mb-0.5" />
          <span>Fitness</span>
        </NavLink>

        {/* Search */}
        <button
          type="button"
          onClick={onOpenSearch}
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-[10px] font-semibold text-brand-sage-600 dark:text-brand-darkMuted hover:text-brand-lightPrimary transition-colors"
        >
          <Search className="w-5 h-5 mb-0.5" />
          <span>Search</span>
        </button>

        {/* Quick Theme Switch */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-[10px] font-semibold text-brand-sage-600 dark:text-brand-darkMuted hover:text-brand-lightPrimary transition-colors"
        >
          {theme === 'light' ? (
            <Moon className="w-5 h-5 mb-0.5" />
          ) : (
            <Sun className="w-5 h-5 mb-0.5 text-amber-300" />
          )}
          <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
        </button>
      </div>
    </nav>
  );
};
