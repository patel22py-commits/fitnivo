import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, Apple, Dumbbell, Search, Menu, X } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenSearch: () => void;
  onToggleMenu: () => void;
  isMenuOpen: boolean;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onOpenSearch,
  onToggleMenu,
  isMenuOpen
}) => {
  return (
    <nav
      aria-label="Mobile Navigation"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-brand-darkBg/95 backdrop-blur-lg border-t border-brand-sage-200/80 dark:border-brand-sage-800/80 px-2 py-1 shadow-lg pb-[env(safe-area-inset-bottom,8px)]"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* Home with Fitnivo Brand Icon */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-0.5 px-2 rounded-xl text-[10px] font-semibold transition-colors ${
              isActive && !isMenuOpen
                ? 'text-brand-lightPrimary dark:text-brand-darkPrimary'
                : 'text-brand-sage-600 dark:text-brand-darkMuted hover:text-brand-lightPrimary'
            }`
          }
        >
          <div className="w-5 h-5 mb-0.5 p-0.5 rounded-md bg-white dark:bg-white/95 flex items-center justify-center shadow-xs">
            <img src="/fitnivo-icon.png" alt="FITNIVO" className="w-full h-full object-contain" />
          </div>
          <span>Home</span>
        </NavLink>

        {/* Health */}
        <NavLink
          to="/womens-health"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-1 px-2 rounded-xl text-[10px] font-semibold transition-colors ${
              isActive && !isMenuOpen
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
            `flex flex-col items-center justify-center py-1 px-2 rounded-xl text-[10px] font-semibold transition-colors ${
              isActive && !isMenuOpen
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
            `flex flex-col items-center justify-center py-1 px-2 rounded-xl text-[10px] font-semibold transition-colors ${
              isActive && !isMenuOpen
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
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl text-[10px] font-semibold text-brand-sage-600 dark:text-brand-darkMuted hover:text-brand-lightPrimary transition-colors"
        >
          <Search className="w-5 h-5 mb-0.5" />
          <span>Search</span>
        </button>

        {/* Menu Toggle */}
        <button
          type="button"
          onClick={onToggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl text-[10px] font-semibold transition-colors ${
            isMenuOpen
              ? 'text-brand-lightPrimary dark:text-brand-darkPrimary'
              : 'text-brand-sage-600 dark:text-brand-darkMuted hover:text-brand-lightPrimary'
          }`}
        >
          {isMenuOpen ? <X className="w-5 h-5 mb-0.5" /> : <Menu className="w-5 h-5 mb-0.5" />}
          <span>Menu</span>
        </button>
      </div>
    </nav>
  );
};
