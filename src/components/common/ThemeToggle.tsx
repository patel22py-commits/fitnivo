import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className={`relative p-2.5 rounded-full transition-all duration-300 border border-brand-sage-200 dark:border-brand-sage-700 bg-white/70 dark:bg-brand-darkCard text-brand-lightPrimary dark:text-brand-darkPrimary hover:bg-brand-sage-50 dark:hover:bg-brand-sage-900/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-lightSecondary dark:focus:ring-brand-darkPrimary ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === 'light' ? (
          <Moon className="w-4 h-4 transition-transform duration-300 rotate-0 scale-100" />
        ) : (
          <Sun className="w-4 h-4 transition-transform duration-300 rotate-90 scale-100 text-amber-300" />
        )}
      </div>
    </button>
  );
};
